import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const OrderedFoods = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setMyOrders(res.data))
      .catch((error) => console.error(error.message));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FEA116",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/orders/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "SUCCESSFUL",
                text: "Food deleted successfully!",
                confirmButtonColor: "#22bb33",
                confirmButtonText: "Okay",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
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
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | My Ordered Foods</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12
        bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>My Ordered Foods</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>
                See all delicious foods you have ordered
              </p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='overflow-x-auto'>
              <Table hoverable>
                <TableHead className='bg-color7 border-b border-color3 text-color2 font-semibold text-sm'>
                  <TableHeadCell>Image</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Price</TableHeadCell>
                  <TableHeadCell>Date</TableHeadCell>
                  <TableHeadCell>Quantity</TableHeadCell>
                  <TableHeadCell>Owner</TableHeadCell>
                  <TableHeadCell>Action</TableHeadCell>
                </TableHead>
                <TableBody className='divide-y'>
                  {myOrders.map((myOrder) => (
                    <TableRow
                      className='bg-color7 hover:bg-color7'
                      key={myOrder._id}>
                      <TableCell>
                        <img
                          className='lg:w-20 lg:h-20'
                          src={myOrder.food_image}
                          alt=''
                        />
                      </TableCell>
                      <TableCell className='text-lg whitespace-nowrap text-color2 font-medium'>
                        {myOrder.food_name}
                      </TableCell>
                      <TableCell className='text-lg text-color2 font-medium'>
                        ${myOrder.price}
                      </TableCell>
                      <TableCell className='text-lg text-color2 font-medium'>
                        {myOrder.date}
                      </TableCell>
                      <TableCell className='text-lg text-color2 font-medium'>
                        {myOrder.quantity}
                      </TableCell>
                      <TableCell className='text-lg text-color2 font-medium'>
                        {myOrder.user_name}
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => handleDelete(myOrder._id)}
                          className='flex text-xl bg-color9 text-color8 p-2 rounded-full'>
                          <MdDeleteOutline />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedFoods;
