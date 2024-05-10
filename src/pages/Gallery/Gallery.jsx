import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>TasteTreat | Gallery</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>Gallery</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span className='text-color9'>/</span>
              <p className='text-color9'>All Foods</p>
              <span>/</span>
              <p>Gallery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
