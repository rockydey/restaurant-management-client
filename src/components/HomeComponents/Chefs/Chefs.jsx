import chef1 from "../../../assets/chefs/team-1.jpg";
import chef2 from "../../../assets/chefs/team-2.jpg";
import chef3 from "../../../assets/chefs/team-3.jpg";
import chef4 from "../../../assets/chefs/team-4.jpg";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Chefs = () => {
  return (
    <div className='py-24 px-3 md:px-5 lg:px-0'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex items-center gap-4 justify-center'>
          <div className='w-16 border-color9 border-b-[3px]'></div>
          <h4 className='font-pacifico text-2xl text-color9'>Team Members</h4>
          <div className='w-16 border-color9 border-b-[3px]'></div>
        </div>
        <h2 className='text-center mt-4 mb-10 font-black text-3xl md:text-4xl'>
          Meet Our Special Chefs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-color3 px-5 pt-5'>
            <img className='rounded-full' src={chef1} alt='' />
            <div className='text-center mt-5'>
              <h3 className='text-color7 text-xl font-black'>
                Chef Xavier Rodriguez
              </h3>
              <p className='text-lg mt-1 font-bold text-color5'>
                Executive Chef
              </p>
            </div>
            <div className='flex gap-3 justify-center mt-5'>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaFacebook />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaTwitter />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
          <div className='bg-color3  px-5 pt-5'>
            <img className='rounded-full' src={chef2} alt='' />
            <div className='text-center mt-5'>
              <h3 className='text-color7 text-xl font-black'>
                Chef David Martinez
              </h3>
              <p className='text-lg mt-1 font-bold text-color5'>Head Chef</p>
            </div>
            <div className='flex gap-3 justify-center mt-5'>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaFacebook />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaTwitter />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
          <div className='bg-color3  px-5 pt-5'>
            <img className='rounded-full' src={chef3} alt='' />
            <div className='text-center mt-5'>
              <h3 className='text-color7 text-xl font-black'>
                Chef Benjamin Lee
              </h3>
              <p className='text-lg mt-1 font-bold text-color5'>Sous Chef</p>
            </div>
            <div className='flex gap-3 justify-center mt-5'>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaFacebook />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaTwitter />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
          <div className='bg-color3 px-5 pt-5'>
            <img className='rounded-full' src={chef4} alt='' />
            <div className='text-center mt-5'>
              <h3 className='text-color7 text-xl font-black'>
                Chef William Johnson
              </h3>
              <p className='text-lg mt-1 font-bold text-color5'>Pastry Chef</p>
            </div>
            <div className='flex gap-3 justify-center mt-5'>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaFacebook />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaTwitter />
              </p>
              <p className='bg-color9 text-lg px-3 pt-3 pb-4 cursor-pointer rounded-t-full'>
                <FaInstagramSquare />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
