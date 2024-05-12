import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const ViewFoodDetails = () => {
  const foodDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    food_name,
    user_email,
    food_image,
    food_category,
    price,
    add_by,
    origin,
    description,
  } = foodDetails;

  return (
    <div>
      <Helmet>
        <title>TasteTreat | {food_name}</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black font-pacifico text-color9'>
              {food_name}
            </h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span>/</span>
              <p>View Details</p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl text-color2 mx-auto'>
            <div className='lg:w-4/5 mx-auto bg-color7 hover:bg-color8 p-10 rounded-xl'>
              <div className='flex md:flex-row flex-col gap-3 md:items-center justify-between'>
                <h3 className='text-2xl md:text-3xl font-bold text-color9'>
                  {food_name}
                </h3>
                <button
                  disabled={user.email === user_email}
                  onClick={() => navigate(`/purchase/${_id}`)}
                  className='bg-color9 disabled:bg-[#cccccc] disabled:cursor-not-allowed disabled:text-[#666666] w-fit text-xl font-semibold text-color8 px-4 py-2'>
                  Purchase
                </button>
              </div>
              <div className='border-b-2 mt-5 border-color5'></div>
              <div className='flex md:flex-row flex-col justify-between md:items-center'>
                <div className='text-xl hidden md:block space-y-3 font-medium'>
                  <p>
                    <span className='font-bold'>Price:</span> ${price}
                  </p>
                  <p>
                    <span className='font-bold'>Category:</span> {food_category}
                  </p>
                </div>
                <div className='flex justify-center'>
                  <img className='md:w-4/5 lg:w-full' src={food_image} alt='' />
                </div>
                <div className='text-xl md:hidden mb-3 md:mb-0 space-y-3 font-medium'>
                  <p>
                    <span className='font-bold'>Price:</span> ${price}
                  </p>
                  <p>
                    <span className='font-bold'>Category:</span> {food_category}
                  </p>
                </div>
                <div className='text-xl space-y-3 font-medium mb-5 md:mb-0'>
                  <p>
                    <span className='font-bold'>Made By:</span> {add_by}
                  </p>
                  <p>
                    <span className='font-bold'>Origin:</span> {origin}
                  </p>
                </div>
              </div>
              <div className='border-b-2 mb-5 border-color5'></div>
              <div className='text-center text-xl font-medium text-color3'>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFoodDetails;
