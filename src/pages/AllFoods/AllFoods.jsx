import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Food from "../../components/AllFoodsComponents/Food/Food";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then((res) => setFoods(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
          <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {foods.map((food) => (
              <Food key={food._id} food={food}></Food>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
