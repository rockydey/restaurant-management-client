import "./Header.css";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { ImSpoonKnife } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bannerBg from "../../../assets/banner/bannerBg.jpg";
import { CiMobile3 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#FEA116" : "",
      borderBottomWidth: isActive ? "2px" : "0",
      borderBottomColor: isActive ? "#FEA116" : "",
    };
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className='hover:text-color9 duration-300'
          style={navLinkStyles}
          to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className='hover:text-color9 duration-300'
          style={navLinkStyles}
          to='/all-foods'>
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className='hover:text-color9 duration-300'
          style={navLinkStyles}
          to='/gallery'>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          className='hover:text-color9 duration-300'
          style={navLinkStyles}
          to='/contact'>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className='h-screen bg-cover bg-center bg-no-repeat bg-color10 bg-blend-overlay'>
      <div className='py-3 px-3 md:px-5 lg:px-0 flex items-center justify-between text-color8 max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5'>
          <p className='flex text-base items-center gap-1'>
            <CiMobile3 className='text-color9' /> <span>(315) 298-2218</span>
          </p>
          <p className='flex text-base items-center gap-1'>
            <IoLocationOutline className='text-color9' />{" "}
            <span>Altmar, New York(NY)</span>
          </p>
        </div>
        <div className='text-2xl flex items-center gap-5'>
          <p className='cursor-pointer text-[#1877F2]'>
            <FaFacebook />
          </p>
          <p className='text-[#1DA1F2] cursor-pointer'>
            <FaTwitter />
          </p>
          <p className='text-[#E60023] cursor-pointer'>
            <FaPinterest />
          </p>
        </div>
      </div>
      <div className='sticky top-0'>
        <div className='bg-color10 border-b border-b-color3 py-2 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <Navbar fluid rounded>
              <NavbarBrand
                onClick={() => navigate("/")}
                className='cursor-pointer'>
                <ImSpoonKnife className='text-2xl md:text-3xl lg:text-4xl text-color9' />
                <span className='self-center ml-2 text-3xl md:text-[35px] lg:text-[40px] font-black whitespace-nowrap text-color9  dark:text-white'>
                  TasteTreat
                </span>
              </NavbarBrand>
              <div className='flex gap-3 md:gap-0 md:order-2'>
                <Link to='/login'>
                  <Button className='bg-color9'>Login</Button>
                </Link>
                <NavbarToggle className='toggle' />
              </div>
              <NavbarCollapse className='text-color8'>
                {navLinks}
              </NavbarCollapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
