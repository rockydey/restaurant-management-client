import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import Feedback from "../../components/GalleryComponents/Feedback/Feedback";
import { FaPlus } from "react-icons/fa6";
import { Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Gallery = () => {
  const [openModal, setOpenModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const feedbacks = useLoaderData();
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const uName = form.uName.value;
    const fPhoto = form.photo.value;
    const uFeedback = form.feedback.value;

    const userFeedback = {
      user_name: uName,
      food_image: fPhoto,
      user_feedback: uFeedback,
    };

    axios
      .post("https://restaurant-management-server-nine.vercel.app/feedbacks", userFeedback)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Feedback Added Successfully!",
            confirmButtonColor: "#22bb33",
            confirmButtonText: "Okay",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

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
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            {user ? (
              <div className='flex justify-end mb-5'>
                <button
                  onClick={() => setOpenModal(!openModal)}
                  className='px-4 flex items-center gap-1 py-2 bg-color9 text-color8 font-semibold text-lg'>
                  <FaPlus /> Add Feedback
                </button>
              </div>
            ) : (
              <div className='flex justify-end mb-5'>
                <button
                  onClick={() => setRedirect(!redirect)}
                  className='px-4 flex items-center gap-1 py-2 bg-color9 text-color8 font-semibold text-lg'>
                  <FaPlus /> Add Feedback
                </button>
              </div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {feedbacks.map((feedback) => (
                <Feedback key={feedback._id} feedback={feedback}></Feedback>
              ))}
            </div>
          </div>
        </div>
        <Modal
          show={openModal}
          size='md'
          popup
          onClose={() => setOpenModal(false)}>
          <Modal.Header className='bg-color7' />
          <Modal.Body className='bg-color7 rounded-b'>
            <div className='space-y-6'>
              <h3 className='text-2xl text-color9 font-pacifico text-center font-medium '>
                Add Your Feedback
              </h3>
              <form onSubmit={handleFeedback} className='space-y-3'>
                <div className='flex flex-col gap-1'>
                  <label className='font-semibold text-lg' htmlFor='uName'>
                    User Name:{" "}
                  </label>
                  <input
                    className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                    readOnly
                    defaultValue={user?.displayName}
                    type='text'
                    name='uName'
                    required
                    id='uName'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='font-semibold text-lg' htmlFor='photo'>
                    Food Image:{" "}
                  </label>
                  <input
                    className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                    type='text'
                    name='photo'
                    placeholder='Food image url'
                    id='photo'
                    required
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label className='font-semibold text-lg' htmlFor='feedback'>
                    Feedback:{" "}
                  </label>
                  <textarea
                    rows='5'
                    className='w-full rounded-md focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                    type='text'
                    name='feedback'
                    placeholder='Feedback on food'
                    id='feedback'
                    required
                  />
                </div>
                <div className='text-center'>
                  <button
                    className={`bg-color9 rounded mt-2 text-color8 px-5 py-2 cursor-pointer  font-semibold`}
                    type='submit'>
                    Placed Feedback
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {redirect && (
        <Navigate
          to='/login'
          replace={true}
          state={location.pathname}></Navigate>
      )}
    </div>
  );
};

export default Gallery;
