import axios from "axios";
import { useEffect, useState } from "react";
import TopFood from "../../TopFood/TopFood";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://restaurant-management-server-nine.vercel.app/food")
      .then((res) => {
        setTopFoods(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className='bg-color1 py-24'>
      <div className='max-w-screen-xl mx-auto px-3 md:px-5 lg:px-0'>
        <div className='flex items-center gap-4 justify-center'>
          <div className='w-16 border-color9 border-b-[3px]'></div>
          <h4 className='font-pacifico text-xl text-color9'>Top Foods</h4>
          <div className='w-16 border-color9 border-b-[3px]'></div>
        </div>
        <h2 className='text-center mt-4 font-black text-3xl md:text-4xl mb-32'>
          Check Our Tasty Foods
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
          {topFoods.map((topFood) => (
            <TopFood key={topFood._id} topFood={topFood}></TopFood>
          ))}
        </div>
        <div className='text-center'>
          <Link
            to='/all-foods'
            className='px-5 py-2 border-2 border-color9 rounded-lg text-color9 text-xl font-bold duration-300 hover:bg-color9 hover:text-color8'>
            See All Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoods;
