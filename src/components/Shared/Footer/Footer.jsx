import "./Footer.css";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLocation, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className='py-16 px-3 md:px-5 lg:px-0 border-t border-b-color3'>
        <div className='max-w-screen-xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <h3 className='flex items-center gap-2 cursor-pointer'>
              <ImSpoonKnife className='text-xl md:text-2xl lg:text-3xl text-color9' />
              <span className='self-center text-2xl md:text-3xl lg:text-[35px] font-black whitespace-nowrap text-color9  dark:text-white'>
                TasteTreat
              </span>
            </h3>
            <p className='text-lg font-medium'>
              Experience culinary mastery with TasteTreat. Elevate service,
              delight guests, and savor success with our intuitive restaurant
              management solution.
            </p>
          </div>
          <div className='space-y-4 lg:ml-auto'>
            <div className='flex items-center gap-2'>
              <h3 className='text-color9 font-pacifico text-lg lg:text-2xl'>
                Useful Links
              </h3>
              <div className='w-12 border-color9 border-b-[3px]'></div>
            </div>
            <div className='space-y-2'>
              <p className='flex items-center gap-1 text-lg cursor-pointer'>
                <MdOutlineKeyboardArrowRight /> About Us
              </p>
              <p className='flex items-center gap-1 text-lg cursor-pointer'>
                <MdOutlineKeyboardArrowRight /> Reservation
              </p>
              <p className='flex items-center gap-1 text-lg cursor-pointer'>
                <MdOutlineKeyboardArrowRight /> Privacy Policy
              </p>
              <p className='flex items-center gap-1 text-lg cursor-pointer'>
                <MdOutlineKeyboardArrowRight /> Terms & Condition
              </p>
            </div>
          </div>
          <div className='space-y-4 lg:ml-auto'>
            <div className='flex items-center gap-2'>
              <h3 className='text-color9 font-pacifico text-lg lg:text-2xl'>
                Contact
              </h3>
              <div className='w-12 border-color9 border-b-[3px]'></div>
            </div>
            <div className='space-y-3'>
              <p className='flex items-center gap-2 text-lg cursor-pointer'>
                <IoLocation className='text-color9' /> Altmar, New York(NY)
              </p>
              <p className='flex items-center gap-2 text-lg cursor-pointer'>
                <FaPhoneAlt className='text-color9' /> (315) 298-2218
              </p>
              <p className='flex items-center gap-2 text-lg cursor-pointer'>
                <IoMail className='text-color9' /> info@tastetreat.com
              </p>
            </div>
          </div>
          <div className='space-y-4 lg:ml-auto'>
            <div className='flex items-center gap-2'>
              <h3 className='text-color9 font-pacifico text-lg lg:text-2xl'>
                Opening
              </h3>
              <div className='w-12 border-color9 border-b-[3px]'></div>
            </div>
            <div className='space-y-3'>
              <div className='space-y-1'>
                <h4 className='text-lg font-semibold'>Monday - Saturday </h4>
                <p className='text-base'>09AM - 09PM</p>
              </div>
              <div className='space-y-1'>
                <h4 className='text-lg font-semibold'>Sunday </h4>
                <p className='text-base'>10AM - 08PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-color1 py-5 px-3 md:px-5 lg:px-0 border-t border-b-color3'>
        <div className='max-w-screen-xl mx-auto flex md:flex-row flex-col gap-3 md:gap-0 justify-between items-center'>
          <p className='text-lg font-normal'>
            &copy; TasteTreat, All Right Reserved
          </p>
          <div className='flex gap-5'>
            <Link>Home</Link>
            <div className='border-r border-color3'></div>
            <Link>Cookies</Link>
            <div className='border-r border-color3'></div>
            <Link>Help</Link>
            <div className='border-r border-color3'></div>
            <Link>FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
