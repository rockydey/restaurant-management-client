import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";
import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [updateList, setUpdateList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myFoods?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setMyFoods(res.data))
      .catch((error) => console.error(error.message));
  }, [user]);

  useEffect(() => {
    setUpdateList(myFoods.find((food) => food._id === updateId));
  }, [updateId]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const fName = form.fName.value;
    const fPrice = form.fPrice.value;
    const fQuantity = form.fQuantity.value;
    const fImage = form.fImage.value;
    const fCategory = form.fCategory.value;
    const fOrigin = form.fOrigin.value;
    const fDescription = form.fDescription.value;

    const updateFood = {
      food_name: fName,
      food_category: fCategory,
      price: fPrice,
      quantity: fQuantity,
      origin: fOrigin,
      description: fDescription,
      food_image: fImage,
    };

    axios
      .patch(`http://localhost:5000/updateFood/${updateId}`, updateFood)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "SUCCESSFUL",
            text: "Food updated successfully!",
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
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | My Foods</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12
        bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>My Added Foods</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>
                See all delicious food items added by you
              </p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='lg:w-4/5 mx-auto'>
              <div className='overflow-x-auto'>
                <Table hoverable>
                  <TableHead className='bg-color7 border-b border-color3 text-color2 font-semibold text-sm'>
                    <TableHeadCell>Image</TableHeadCell>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Origin</TableHeadCell>
                    <TableHeadCell>Action</TableHeadCell>
                  </TableHead>
                  <TableBody className='divide-y'>
                    {myFoods.map((myFood) => (
                      <TableRow
                        className='bg-color7 hover:bg-color7'
                        key={myFood._id}>
                        <TableCell>
                          <img
                            className='lg:w-20 lg:h-20'
                            src={myFood.food_image}
                            alt=''
                          />
                        </TableCell>
                        <TableCell className='text-lg whitespace-nowrap text-color2 font-medium'>
                          {myFood.food_name}
                        </TableCell>
                        <TableCell className='text-lg text-color2 font-medium'>
                          ${myFood.price}
                        </TableCell>
                        <TableCell className='text-lg text-color2 font-medium'>
                          {myFood.food_category}
                        </TableCell>
                        <TableCell className='text-lg text-color2 font-medium'>
                          {myFood.origin}
                        </TableCell>
                        <TableCell>
                          <button
                            onClick={() => {
                              setOpenModal(!openModal);
                              setUpdateId(myFood._id);
                            }}
                            className='flex text-xl bg-color9 text-color8 p-2 rounded-full'>
                            <GrUpdate />
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
        <Modal
          show={openModal}
          size='xl'
          popup
          onClose={() => setOpenModal(false)}>
          <Modal.Header className='bg-color7 border-b-0' />
          <Modal.Body className='bg-color7 rounded-b'>
            <div className='space-y-6'>
              <h3 className='text-2xl text-color9 font-pacifico text-center font-medium '>
                Update Your Food
              </h3>
              <form onSubmit={handleUpdate} className='space-y-3'>
                <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold text-lg' htmlFor='fName'>
                      Food Name:{" "}
                    </label>
                    <input
                      defaultValue={updateList?.food_name}
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
                      defaultValue={updateList?.price}
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
                      defaultValue={updateList?.quantity}
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
                      defaultValue={updateList?.food_image}
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
                      defaultValue={updateList?.food_category}
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
                      defaultValue={updateList?.origin}
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
                      defaultValue={updateList?.description}
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
                    className={`bg-color9 rounded mt-2 text-color8 px-5 py-2 cursor-pointer  font-semibold`}
                    type='submit'>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default MyFoods;
