import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
  const { _id, food_name, food_image, food_category, price, quantity } = food;
  const navigate = useNavigate();
  return (
    <div className='border text-color2 border-color5 p-5 hover:bg-color8 bg-color7'>
      <div className='flex flex-col items-center'>
        <img className='' src={food_image} alt='' />
        <div className='text-center space-y-4'>
          <p className='text-xl font-bold'>${price}</p>
          <h3 className='text-3xl font-black text-color9 font-pacifico'>
            {food_name}
          </h3>
          <div className='flex justify-center gap-10 text-lg font-normal'>
            <p>
              <span className='font-semibold'>Category:</span> {food_category}
            </p>
            <p>
              <span className='font-semibold'>Quantity:</span> {quantity}
            </p>
          </div>
          <button
            onClick={() => navigate(`/view-details/${_id}`)}
            className='bg-color9 px-4 py-2 text-color8 font-bold text-lg'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object,
};

export default Food;
