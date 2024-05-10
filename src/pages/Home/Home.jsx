import { Helmet } from "react-helmet-async";
import Banner from "../../components/HomeComponents/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTreat | Home</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
