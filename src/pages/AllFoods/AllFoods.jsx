import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import Food from "../../components/AllFoodsComponents/Food/Food";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import HashLoader from "react-spinners/HashLoader";

const AllFoods = () => {
  const [searchFood, setSearchFood] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  const [count, setCount] = useState(null);
  const foodsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / foodsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:5000/foods?page=${currentPage}&size=${foodsPerPage}`
      )
      .then((res) => {
        setSearchFood(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [currentPage, setLoading]);

  const handleSearchOnChange = (event) => {
    const search = event.target.value;
    if (search === "") {
      axios
        .get(
          `http://localhost:5000/foods?page=${currentPage}&size=${foodsPerPage}`
        )
        .then((res) => setSearchFood(res.data))
        .catch((error) => console.error(error));
    } else {
      axios
        .get(
          `http://localhost:5000/searchFoods?search=${search}`
        )
        .then((res) => {
          if (res.data.length === 0) {
            toast.warning("Sorry, this food dish isn't found!", {
              position: "top-center",
              theme: "colored",
            });
          }
          setSearchFood(res.data);
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/foodsCount")
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <p className='flex justify-center h-[50vh] pt-52'>
        <HashLoader size={50} color='#F9B17A' />
      </p>
    );
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage);
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | All Foods</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>All Foods</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span>/</span>
              <p>All Foods</p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='mb-5'>
              <div className='flex items-center justify-center md:justify-end'>
                <input
                  onChange={handleSearchOnChange}
                  placeholder='Find your food'
                  className='px-4 py-2 rounded-s-lg focus:shadow-none focus:ring-0 border-color4 focus:outline-none text-base font-normal text-color2'
                  type='text'
                  name='search'
                />
                <button
                  className='px-4 py-3 border border-color9  bg-color9 text-color8 rounded-e-lg'
                  type='submit'>
                  <FaSearch />
                </button>
              </div>
            </div>
            {
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {searchFood.map((food) => (
                  <Food key={food._id} food={food}></Food>
                ))}
              </div>
            }
            <div className='mt-10 flex gap-4 justify-center items-center'>
              <button
                onClick={handlePrevPage}
                className='border-2 hover:bg-color9 hover:text-color8 duration-300 border-color9 text-color9 px-2 py-2 rounded-full'>
                <FaChevronLeft />
              </button>
              {pages.map((page) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`${
                    currentPage === page
                      ? "bg-color9 border-2 border-color9"
                      : "border-2 border-color9 text-color9"
                  } px-[14px] py-2 rounded-full`}
                  key={page}>
                  {page + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                className='border-2 hover:bg-color9 hover:text-color8 duration-300 border-color9 text-color9 px-2 py-2 rounded-full'>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
