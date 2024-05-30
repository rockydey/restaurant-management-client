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
import { MdOutlineDateRange } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaRegUser,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // Current Date
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.toLocaleString("default", { month: "long" });
  let dd = today.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  const currentDate = dd + " " + mm.slice(0, 3) + " " + yyyy;

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
        toast.success("Logout Successfully!", {
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
    <div
      data-aos='fade-down'
      data-aos-duration='1500'
      className='absolute top-0 w-full transition-all duration-1000'>
      <div className='py-3 px-3 md:px-5 lg:px-0 flex items-center justify-between text-color8 max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-5'>
          <p className='flex text-base items-center gap-2'>
            <FaRegUser className='text-color9' />{" "}
            <span>{user?.displayName ? user?.displayName : "User"}</span>
          </p>
          <p className='flex text-base items-center gap-2'>
            <MdOutlineDateRange className='text-color9' />{" "}
            <span>{currentDate}</span>
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
            isSticky
              ? "bg-[#000000d9] border-b border-b-color3"
              : "bg-[#000000d9] lg:bg-color10"
          }  py-3 px-3 md:px-5 lg:px-0`}>
          <div className='max-w-screen-xl mx-auto'>
            <Navbar fluid rounded>
              <NavbarBrand
                onClick={() => navigate("/")}
                className='cursor-pointer'>
                <ImSpoonKnife className='text-2xl md:text-3xl lg:text-4xl text-color9' />
                <span className='self-center ml-2 text-3xl md:text-[35px] lg:text-[40px] font-black whitespace-nowrap text-color9'>
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
                        onClick={() => navigate("/my-foods")}
                        className='text-color8 focus:bg-color9 hover:bg-color9 text-lg font-medium'>
                        My Foods
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/add-food")}
                        className='text-color8 focus:bg-color9 hover:bg-color9 text-lg font-medium'>
                        Add Food
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => navigate("/ordered-foods")}
                        className='text-color8 focus:bg-color9 hover:bg-color9 text-lg font-medium'>
                        My Orders
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
              <NavbarCollapse className='text-color8 z-50'>
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
