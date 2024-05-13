import { Helmet } from "react-helmet-async";
import Banner from "../../components/HomeComponents/Banner/Banner";
import TopFoods from "../../components/HomeComponents/Banner/TopFoods/TopFoods";
import AboutUs from "../../components/HomeComponents/AboutUs/AboutUs";
import "./Home.css";
import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import Newsletter from "../../components/HomeComponents/Newsletter/Newsletter";
import Chefs from "../../components/HomeComponents/Chefs/Chefs";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | Home</title>
      </Helmet>

      <Banner />
      <AboutUs />
      <TopFoods />
      <Chefs />
      <Newsletter />

      <button
        onClick={scrollToTop}
        className={`p-3 flex items-center justify-center bg-color9 text-color8 font-bold text-3xl fixed bottom-5 right-5 border-0 scroll-btn ${
          isVisible ? "show" : "hide"
        }`}>
        <IoIosArrowDropup />
      </button>
    </div>
  );
};

export default Home;
