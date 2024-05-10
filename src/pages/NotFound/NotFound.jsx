import { Link } from "react-router-dom";
import img404 from "../../assets/404/404.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className='py-16 h-screen bg-color2'>
      <Helmet>
        <title>TasteTreat | 404 - Not Found</title>
      </Helmet>
      <div className='w-4/5 md:w-3/5 lg:w-2/5 mx-auto'>
        <img
          className='rounded-xl border-2 border-color6'
          src={img404}
          alt='404 Image'
        />
        <div className='mt-8 flex justify-center'>
          <Link
            to='/'
            className='font-nunito font-semibold flex gap-3 items-center w-fit  p-3 bg-color9 text-color8 rounded-xl text-2xl'>
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
