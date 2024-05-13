import { Helmet } from "react-helmet-async";
import Banner from "../../components/HomeComponents/Banner/Banner";
import TopFoods from "../../components/HomeComponents/Banner/TopFoods/TopFoods";
import AboutUs from "../../components/HomeComponents/AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTreat | Home</title>
      </Helmet>
      <Banner />
      <AboutUs />
      <TopFoods />
    </div>
  );
};

export default Home;
