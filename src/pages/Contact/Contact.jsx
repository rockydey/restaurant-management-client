import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { IoMdMailOpen } from "react-icons/io";
import bookingImg from "../../assets/contact/booking.jpg";
import Swal from "sweetalert2";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    Swal.fire({
      icon: "success",
      title: "Thank You",
      text: "Soon, we will contact with you.",
      confirmButtonColor: "#22bb33",
      confirmButtonText: "Okay",
    }).then((result) => {
      if (result.isConfirmed) {
        form.reset();
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | Contact</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>Contact</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span className='text-color9'>/</span>
              <p className='text-color9'>All Foods</p>
              <span className='text-color9'>/</span>
              <p className='text-color9'>Gallery</p>
              <span>/</span>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='flex items-center gap-4 justify-center'>
              <div className='w-16 border-color9 border-b-[3px]'></div>
              <h4 className='font-pacifico text-xl text-color9'>Contact Us</h4>
              <div className='w-16 border-color9 border-b-[3px]'></div>
            </div>
            <h2 className='text-center text-3xl md:text-4xl mt-4 font-black'>
              Contact For Any Query
            </h2>
            <div className='flex md:flex-row flex-col gap-6 md:justify-around md:items-center mt-10'>
              <div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-color9 font-pacifico text-lg lg:text-2xl'>
                    Booking
                  </h3>
                  <div className='w-12 border-color9 border-b-[3px]'></div>
                </div>
                <p className='flex mt-2 items-center gap-2 text-xl cursor-pointer'>
                  <IoMdMailOpen className='text-color9' />{" "}
                  booking@tastetreat.com
                </p>
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-color9 font-pacifico text-lg lg:text-2xl'>
                    General
                  </h3>
                  <div className='w-12 border-color9 border-b-[3px]'></div>
                </div>
                <p className='flex mt-2 items-center gap-2 text-xl cursor-pointer'>
                  <IoMdMailOpen className='text-color9' /> info@tastetreat.com
                </p>
              </div>
              <div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-color9 font-pacifico text-lg lg:text-2xl'>
                    Technical
                  </h3>
                  <div className='w-12 border-color9 border-b-[3px]'></div>
                </div>
                <p className='flex mt-2 items-center gap-2 text-xl cursor-pointer'>
                  <IoMdMailOpen className='text-color9' /> tech@tastetreat.com
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16'>
              <div>
                <img
                  className='rounded-xl border-2 border-color9'
                  src={bookingImg}
                  alt=''
                />
              </div>
              <div>
                <form
                  onSubmit={handleContact}
                  className='text-color2 md:border-0 md:p-0 border-2 rounded-xl p-5 border-color9 space-y-5'>
                  <div className='flex flex-col md:flex-row gap-5'>
                    <input
                      className='w-full focus:shadow-none focus:ring-0 border-color4 p-4 focus:outline-none text-base font-normal text-color2'
                      type='text'
                      placeholder='Your Name'
                      name='uName'
                      id='uName'
                      required
                    />
                    <input
                      className='w-full focus:shadow-none focus:ring-0 border-color4 p-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Your Email'
                      type='email'
                      name='uEmail'
                      id='uEmail'
                      required
                    />
                  </div>
                  <div>
                    <input
                      className='w-full focus:shadow-none focus:ring-0 border-color4 p-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Subject'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div>
                    <textarea
                      rows='7'
                      className='w-full focus:shadow-none focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      type='text'
                      name='message'
                      placeholder='Message'
                    />
                  </div>
                  <div className='text-center'>
                    <button
                      className='bg-color9 w-full text-color8 px-5 py-3 cursor-pointer font-semibold'
                      type='submit'>
                      Placed Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
