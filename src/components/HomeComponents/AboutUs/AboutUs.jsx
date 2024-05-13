import aboutImg1 from "../../../assets/about/about-1.jpg";
import aboutImg2 from "../../../assets/about/about-2.jpg";
import aboutImg3 from "../../../assets/about/about-3.jpg";
import aboutImg4 from "../../../assets/about/about-4.jpg";
import { ImSpoonKnife } from "react-icons/im";

const AboutUs = () => {
  return (
    <div className='py-24 px-3 md:px-5 lg:px-0'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 items-center lg:grid-cols-2 gap-10'>
          <div className='grid grid-cols-2 gap-5'>
            <img src={aboutImg1} alt='' />
            <img className='w-4/5 mt-auto' src={aboutImg2} alt='' />
            <img className='w-4/5 ml-auto' src={aboutImg3} alt='' />
            <img src={aboutImg4} alt='' />
          </div>
          <div className=''>
            <div className='flex items-center gap-2'>
              <h3 className='text-color9 font-pacifico text-2xl lg:text-2xl'>
                About Us
              </h3>
              <div className='w-12 border-color9 border-b-[3px]'></div>
            </div>
            <h1 className='flex mt-5 items-center gap-2 md:gap-3 text-2xl md:text-4xl font-black'>
              Welcome to <ImSpoonKnife className='text-color9' />
              <span className=''>TasteTreat</span>
            </h1>
            <div className='space-y-4 mt-5 text-base text-color5 font-medium'>
              <p>
                Where culinary passion meets exquisite taste in every dish.
                Nestled in the heart of New York, our restaurant is a vibrant
                hub for food enthusiasts and connoisseurs alike.
              </p>
              <p>
                At TasteTreat, we believe that dining is not just about
                satiating hunger; it is an experience that should tantalize your
                taste buds and stir your senses. Our dedicated team of chefs
                crafts each dish with meticulous attention to detail, sourcing
                the freshest ingredients locally and globally to ensure
                unparalleled quality and flavor
              </p>
            </div>
            <div className='flex md:flex-row flex-col mt-8 md:items-center gap-8 md:gap-16'>
              <div className='flex items-center gap-5 ps-5 border-s-4 border-color9'>
                <h3 className='text-6xl font-black text-color9'>10</h3>
                <div className='text-lg font-medium'>
                  <p className='text-color5'>Years of</p>
                  <p className='uppercase'>Experience</p>
                </div>
              </div>
              <div className='flex items-center gap-5 ps-5 border-s-4 border-color9'>
                <h3 className='text-6xl font-black text-color9'>50</h3>
                <div className='text-lg font-medium'>
                  <p className='text-color5'>Popular</p>
                  <p className='uppercase'>MASTER CHEFS</p>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <button className='uppercase text-lg font-semibold text-color8 bg-color9 px-5 py-3'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
