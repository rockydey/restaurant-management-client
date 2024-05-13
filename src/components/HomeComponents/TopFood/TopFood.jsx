import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopFood = ({ topFood }) => {
  const { _id, food_name, food_image, food_category, price } = topFood;
  return (
    <div
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration='1500'
      className='bg-color7 hover:bg-color8 duration-300 rounded-[50px] mb-6 md:mb-10 lg:mb-16'>
      <div className='flex justify-center -mt-28'>
        <img className='w-64' src={food_image} alt='' />
      </div>
      <div className='text-color2 px-8 pb-8 space-y-3'>
        <div className='flex justify-between items-center'>
          <h3 className='text-[22px] font-black'>{food_name}</h3>
          <p className='text-xl font-bold'>${price}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold'>{food_category}</p>
          <Link
            to={`/view-details/${_id}`}
            className='bg-color9 px-4 py-2 text-color8 font-bold text-lg'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

TopFood.propTypes = {
  topFood: PropTypes.object,
};

export default TopFood;
