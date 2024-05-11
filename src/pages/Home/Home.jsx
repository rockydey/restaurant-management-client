import { Helmet } from "react-helmet-async";
import Banner from "../../components/HomeComponents/Banner/Banner";
import TopFoods from "../../components/HomeComponents/Banner/TopFoods/TopFoods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTreat | Home</title>
      </Helmet>
      <Banner />
      <TopFoods />
    </div>
  );
};

export default Home;
