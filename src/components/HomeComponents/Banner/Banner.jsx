import bannerBg from "../../../assets/banner/bannerBg.jpg";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className='h-screen bg-cover bg-center bg-no-repeat bg-color10 bg-blend-overlay'>
      <h1>This is Banner</h1>
    </div>
  );
};

export default Banner;
