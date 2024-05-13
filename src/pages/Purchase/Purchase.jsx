import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Purchase = () => {
  const purchaseFood = useLoaderData();
  const { _id, food_name, food_image, price, quantity, count } = purchaseFood;
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //   Current Date
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  const currentDate = dd + "/" + mm + "/" + yyyy;

  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;

    const foodName = form.fName.value;
    const foodPrice = form.price.value;
    const foodQuantity = form.quantity.value;
    const userName = form.uName.value;
    const userEmail = form.uEmail.value;
    const date = form.bDate.value;

    if (foodQuantity > quantity) {
      setError(`Maximum food quantity is ${quantity}`);
      return;
    } else {
      setError("");
    }

    const order = {
      food_name: foodName,
      food_image: food_image,
      price: foodPrice,
      quantity: foodQuantity,
      user_name: userName,
      user_email: userEmail,
      date: date,
    };
    console.log(order);

    axios
      .post(
        "https://restaurant-management-server-nine.vercel.app/orders",
        order
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "SUCCESSFUL",
            text: "Order placed successfully!",
            confirmButtonColor: "#22bb33",
            confirmButtonText: "Okay",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/ordered-foods");
            }
          });
          const nCount = count + 1;
          const nQuantity = quantity - foodQuantity;
          axios
            .patch(
              `https://restaurant-management-server-nine.vercel.app/foods/${_id}`,
              {
                count: nCount,
                quantity: nQuantity,
              }
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => console.error(error.message));
        }
      })
      .catch((error) => console.error(error));
    form.reset();
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | {food_name}</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <p className='text-xl'>Thank You For Choosing</p>
            <h1 className='text-4xl font-black mt-3 font-pacifico text-color9'>
              {food_name}
            </h1>
            <p className='mt-5 text-lg'>
              Please fill out the form for placing the order.
            </p>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='md:w-4/5 w-full lg:w-[45%] mx-auto bg-color7 p-10 rounded-xl'>
              <div className='flex justify-center mb-5'>
                <img
                  className='w-36 border-4 rounded-full border-color9'
                  src={food_image}
                  alt=''
                />
              </div>
              <form onSubmit={handlePurchase} className='text-color2 space-y-5'>
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
                      required
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
                      required
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
                      readOnly
                      defaultValue={food_name}
                      type='text'
                      name='fName'
                      required
                      id='fName'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='price'>
                      Price:{" "}
                    </label>
                    <input
                      readOnly
                      defaultValue={price}
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='text'
                      name='price'
                      id='price'
                      required
                    />
                  </div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='quantity'>
                      Quantity:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder={`Available quantity ${quantity}`}
                      type='number'
                      name='quantity'
                      id='quantity'
                      required
                    />
                    {<p className='text-color11'>{error}</p>}
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='bDate'>
                      Buying Date:{" "}
                    </label>
                    <input
                      className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      defaultValue={currentDate}
                      readOnly
                      type='text'
                      name='bDate'
                      id='bDate'
                      required
                    />
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    className={`bg-color9 text-color8 px-5 py-2 cursor-pointer disabled:bg-[#cccccc] disabled:cursor-not-allowed disabled:text-[#666666] font-semibold`}
                    type='submit'
                    disabled={quantity === 0}>
                    Placed Order
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

export default Purchase;
