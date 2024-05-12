import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AddFoods = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;

    const uName = form.uName.value;
    const uEmail = form.uEmail.value;
    const fName = form.fName.value;
    const fPrice = form.fPrice.value;
    const fQuantity = form.fQuantity.value;
    const fImage = form.fImage.value;
    const fCategory = form.fCategory.value;
    const fOrigin = form.fOrigin.value;
    const fDescription = form.fDescription.value;

    const addFood = {
      user_email: uEmail,
      food_name: fName,
      food_category: fCategory,
      price: fPrice,
      quantity: fQuantity,
      count: 0,
      add_by: uName,
      origin: fOrigin,
      description: fDescription,
      food_image: fImage,
    };

    axios
      .post("http://localhost:5000/foods", addFood)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "SUCCESSFUL",
            text: "Food added successfully!",
            confirmButtonColor: "#22bb33",
            confirmButtonText: "Okay",
          }).then((result) => {
            if (result.isConfirmed) {
              form.reset();
            }
          });
        }
      })
      .catch((error) =>
        toast.error(error.message, {
          position: "top-center",
          theme: "colored",
        })
      );
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | Add Food</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12
        bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>Add Food</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Add Your Favourite Delicious Food</p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto '>
            <div className='md:w-4/5 w-full lg:w-[45%] mx-auto bg-color7 p-10 rounded-xl'>
              <form onSubmit={handleAddFood} className='text-color2 space-y-5'>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='uName'>
                      User Name:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      defaultValue={user?.displayName}
                      readOnly
                      type='text'
                      name='uName'
                      id='uName'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='uEmail'>
                      User Email:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      defaultValue={user?.email}
                      readOnly
                      type='email'
                      name='uEmail'
                      id='uEmail'
                    />
                  </div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='fName'>
                      Food Name:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='text'
                      placeholder='Food name'
                      name='fName'
                      required
                      id='fName'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='fPrice'>
                      Price:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='text'
                      placeholder='Food price'
                      name='fPrice'
                      id='fPrice'
                      required
                    />
                  </div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-1'>
                    <label
                      className='font-semibold text-lg'
                      htmlFor='fQuantity'>
                      Quantity:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='number'
                      name='fQuantity'
                      id='fQuantity'
                      placeholder='Food quantity'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='fImage'>
                      Food Image:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Food image url'
                      type='text'
                      name='fImage'
                      id='fImage'
                      required
                    />
                  </div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-1'>
                    <label
                      className='font-semibold text-lg'
                      htmlFor='fCategory'>
                      Category:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='text'
                      name='fCategory'
                      id='fCategory'
                      placeholder='Food Category'
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='fOrigin'>
                      Origin:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Food origin'
                      type='text'
                      name='fOrigin'
                      id='fOrigin'
                      required
                    />
                  </div>
                </div>
                <div className=''>
                  <div className='flex flex-col gap-1'>
                    <label
                      className='font-semibold text-lg'
                      htmlFor='fDescription'>
                      Description:{" "}
                    </label>
                    <textarea
                      rows='5'
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='number'
                      name='fDescription'
                      id='fDescription'
                      placeholder='Food Description'
                      required
                    />
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    className={`bg-color9 text-color8 px-5 py-2 cursor-pointer] font-semibold`}
                    type='submit'>
                    Add Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoods;
