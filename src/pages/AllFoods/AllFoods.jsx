import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import Food from "../../components/AllFoodsComponents/Food/Food";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const AllFoods = () => {
  const foods = useLoaderData();
  const [searchFood, setSearchFood] = useState(foods);

  const searchFunc = (value) => {
    setSearchFood(
      foods.filter((food) =>
        food.food_name.toLowerCase().match(value.toLowerCase())
      )
    );
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchFunc(event.target.search.value);
  };

  const handleSearchOnCHange = (event) => {
    searchFunc(event.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | All Foods</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>All Foods</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span>/</span>
              <p>All Foods</p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='mb-5'>
              <form
                className='flex items-center justify-end'
                onSubmit={handleSearch}>
                <input
                  onChange={handleSearchOnCHange}
                  placeholder='Find your food'
                  className='px-4 py-2 rounded-s-lg focus:shadow-none focus:ring-0 border-color4 focus:outline-none text-base font-normal text-color2'
                  type='text'
                  name='search'
                />
                <button
                  className='px-4 py-3 border border-color9  bg-color9 text-color8 rounded-e-lg'
                  type='submit'>
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {searchFood.map((food) => (
                <Food key={food._id} food={food}></Food>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
