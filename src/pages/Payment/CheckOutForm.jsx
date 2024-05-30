import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useOrders from "../../hooks/useOrders";
import axios from "axios";
import PropTypes from "prop-types";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ orderId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [orders] = useOrders();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const totalPrice = orders.reduce(
  //   (total, order) => total + parseInt(order.price),
  //   0
  // );
  const orderPrice = orders.find((order) => order._id === orderId);

  useEffect(() => {
    if (orderPrice?.price > 0) {
      axios
        .post("https://restaurant-management-server-nine.vercel.app/create-payment-intent", {
          price: parseInt(orderPrice?.price),
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => console.error(error.message));
    }
  }, [orderPrice]);

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.error("Payment Error: ", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      console.log("Payment Method: ", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${confirmError.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          title: "Success",
          text: "Thank you for purchasing.",
          icon: "success",
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .patch(`https://restaurant-management-server-nine.vercel.app/orders/${orderId}`, {
                status: "paid",
              })
              .then((res) => {
                if (res.data.modifiedCount > 0) {
                  navigate("/ordered-foods");
                }
              });
          }
        });
      }
    }
  };

  return (
    <div className='max-w-screen-sm mx-auto'>
      <form className='' onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#E8E8E8",
                },
              },
              invalid: {
                color: "#de463b",
              },
            },
          }}
        />
        <div className='text-center'>
          <button
            type='submit'
            className='bg-color9 mt-5 w-fit p-2 rounded-lg disabled:bg-[#cccccc] disabled:cursor-not-allowed disabled:text-[#666666]'
            disabled={!stripe || !clientSecret}>
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

CheckOutForm.propTypes = {
  orderId: PropTypes.string,
};

export default CheckOutForm;
