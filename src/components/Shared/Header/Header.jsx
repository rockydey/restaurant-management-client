import "./Header.css";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownItem,
} from "flowbite-react";
import { ImSpoonKnife } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  return (
    <div className='absolute top-0 w-full transition-all duration-1000'>
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
          <p className='cursor-pointer text-[#FF0000]'>
            <FaYoutube />
          </p>
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
      <div
        className={`${
          isSticky ? "fixed top-0 w-full transition-all duration-1000 z-50" : ""
        }`}>
        <div
          className={`${
            isSticky ? "bg-[#000000d9] border-b border-b-color3" : "bg-color10"
          }  py-3 px-3 md:px-5 lg:px-0`}>
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
                {user ? (
                  <>
                    <Dropdown
                      className='bg-color12 border-color9'
                      arrowIcon={false}
                      inline
                      label={
                        <Avatar
                          className='border-[3px] border-color9 rounded-full'
                          alt='User Photo'
                          img={user?.photoURL}
                          rounded
                        />
                      }>
                      <DropdownItem
                        onClick={() => navigate("/my-items")}
                        className='text-color8 focus:bg-color9 hover:bg-color9 text-lg font-medium'>
                        My Items
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/add-item")}
                        className='text-color8 focus:bg-color9 hover:bg-color9 text-lg font-medium'>
                        Add Item
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/ordered-items")}
                        className='text-color8 focus:bg-color9 hover:bg-color9 text-lg font-medium'>
                        Ordered Items
                      </DropdownItem>
                      <DropdownDivider className='bg-color9 lg:hidden' />
                      <DropdownItem className='hover:bg-color12 lg:hidden focus:bg-color12'>
                        <button
                          onClick={handleLogOut}
                          className='bg-color9 w-full py-2 text-color8 cursor-pointer px-4 font-semibold text-lg rounded-lg'>
                          Log Out
                        </button>
                      </DropdownItem>
                    </Dropdown>
                    <button
                      onClick={handleLogOut}
                      className='bg-color9 w-full lg:ml-4 hidden lg:inline-block py-2 text-color8 cursor-pointer px-4 font-semibold text-lg rounded-lg'>
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link to='/login'>
                    <button className='bg-color9 py-2 px-4 font-semibold text-lg rounded-lg'>
                      Login
                    </button>
                  </Link>
                )}
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
