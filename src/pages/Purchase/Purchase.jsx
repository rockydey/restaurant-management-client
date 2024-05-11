import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";

const Purchase = () => {
  const purchaseFood = useLoaderData();
  const { _id, food_name, price, quantity, count } = purchaseFood;
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");

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
      setError(`Maximum food quantity will be ${quantity}`);
      return;
    } else {
      setError("");
    }

    const order = {
      food_name: foodName,
      price: foodPrice,
      quantity: foodQuantity,
      user_name: userName,
      user_email: userEmail,
      date: date,
    };

    axios
      .post("http://localhost:5000/orders", order)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          console.log();
        }
      })
      .catch((error) => console.error(error));
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
            <form onSubmit={handlePurchase} className='text-color2'>
              <div>
                <label className='text-color8' htmlFor='fName'>
                  Food Name:{" "}
                </label>
                <input
                  readOnly
                  defaultValue={food_name}
                  type='text'
                  name='fName'
                  required
                  id='fName'
                />
              </div>
              <div>
                <label className='text-color8' htmlFor='price'>
                  Price:{" "}
                </label>
                <input
                  readOnly
                  defaultValue={price}
                  type='text'
                  name='price'
                  id='price'
                  required
                />
              </div>
              <div>
                <label className='text-color8' htmlFor='quantity'>
                  Quantity:{" "}
                </label>
                <input
                  placeholder={`Available quantity ${quantity}`}
                  type='number'
                  name='quantity'
                  id='quantity'
                  required
                />
                {<p className='text-color11'>{error}</p>}
              </div>
              <div>
                <label className='text-color8' htmlFor='uName'>
                  User Name:{" "}
                </label>
                <input
                  defaultValue={user?.displayName}
                  readOnly
                  type='text'
                  name='uName'
                  id='uName'
                  required
                />
              </div>
              <div>
                <label className='text-color8' htmlFor='uEmail'>
                  User Email:{" "}
                </label>
                <input
                  defaultValue={user?.email}
                  readOnly
                  type='email'
                  name='uEmail'
                  id='uEmail'
                  required
                />
              </div>
              <div>
                <label className='text-color8' htmlFor='bDate'>
                  Buying Date:{" "}
                </label>
                <input
                  defaultValue={currentDate}
                  readOnly
                  type='text'
                  name='bDate'
                  id='bDate'
                  required
                />
              </div>
              <button
                className='bg-color9 text-color8 px-4 py-2 cursor-pointer'
                type='submit'>
                Placed Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
