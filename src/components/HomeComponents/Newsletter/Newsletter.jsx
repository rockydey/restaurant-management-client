import newsletterImg from "../../../assets/newsletter.jpg";

const Newsletter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${newsletterImg})` }}
      className=' bg-cover bg-center bg-no-repeat py-24 bg-color10 bg-blend-overlay'>
      <div className='max-w-screen-xl mx-auto px-3 md:px-5 lg:px-0'>
        <div className='flex items-center gap-4 justify-center'>
          <div className='w-16 border-color9 border-b-[3px]'></div>
          <h4 className='font-pacifico text-2xl text-color9'>Newsletter</h4>
          <div className='w-16 border-color9 border-b-[3px]'></div>
        </div>
        <p className='text-center text-lg font-medium text-color6 lg:w-1/2 mx-auto my-5'>
          Discover tantalizing flavors and delightful dishes at our restaurant.
          Join us for a culinary journey filled with freshness and innovation.
          Reserve your table today and savor every moment.
        </p>
        <div className='flex justify-center relative'>
          <input
            type='email'
            name=''
            className='py-[14px] w-10/12 border border-color9 md:w-2/5 lg:w-1/4 focus:shadow-none focus:ring-0 px-4 focus:outline-none text-base font-normal text-color2'
            placeholder='Your Email'
            id=''
          />
          <button className='px-3 uppercase absolute top-[7px] right-[10%] md:right-[31%] lg:right-[38%] py-2 bg-color9'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
