import { Link } from "react-router-dom";
import bannerBg from "../../../assets/banner/bannerBg.jpg";
import heroImg from "../../../assets/banner/hero.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className='lg:h-screen bg-cover bg-center bg-no-repeat bg-color10 bg-blend-overlay'>
      <div className='pt-44 pb-14 lg:pb-0'>
        <div className='max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-5 lg:gap-10 px-3 md:px-5 lg:px-0'>
          <div className='text-color8 lg:w-3/4 space-y-5'>
            <div
              data-aos='fade-down'
              data-aos-duration='1500'
              className='flex items-center gap-4'>
              <h3 className='text-color9 font-pacifico text-xl lg:text-2xl'>
                TasteTreat
              </h3>
              <div className='w-16 border-color9 border-b-[3px]'></div>
            </div>
            <h2
              data-aos='zoom-in'
              data-aos-duration='1500'
              className='text-4xl lg:text-5xl font-black'>
              Where Flavor Meets Function
            </h2>
            <p
              data-aos='zoom-in'
              data-aos-duration='1500'
              className='text-base lg:text-lg font-medium'>
              TasteTreat streamlines restaurant operations for savory success.
              Seamlessly manage reservations, inventory, and staff scheduling.
              Elevate service, delight guests, and savor culinary triumphs with
              ease.
            </p>
            <Link
              data-aos='fade-up'
              data-aos-duration='1500'
              to='/all-foods'
              className='px-4 py-2 text-base lg:text-lg font-semibold inline-block bg-color9 rounded-lg'>
              Explore Foods
            </Link>
          </div>
          <div data-aos='zoom-in-up' data-aos-duration='1500'>
            <img className='animate-img z-10' src={heroImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
