import PropTypes from "prop-types";
import { useState } from "react";
import "./Feedback.css";

const Feedback = ({ feedback }) => {
  const { user_name, user_feedback, food_image } = feedback;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className='relative cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img className='rounded-xl' src={food_image} alt='' />
      {isHover && (
        <div className='absolute p-8 flex justify-center flex-col top-0 left-0 w-full h-full bg-color12 bg-blend-overlay'>
          <h3 className='border-s border-color9 p-2 text-2xl font-bold'>{user_name}</h3>
          <p className='border-s p-2 border-color9 text-base font-semibold'>{user_feedback}</p>
        </div>
      )}
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.object,
};

export default Feedback;
