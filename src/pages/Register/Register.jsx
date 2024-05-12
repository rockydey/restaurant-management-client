import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { MdOutlineAlternateEmail, MdOutlineUploadFile } from "react-icons/md";
import { useForm } from "react-hook-form";
import { RiLockPasswordLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import addNewUser from "../../utilities/addUser";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [show, setShow] = useState(false);
  const [regError, setRegError] = useState("");
  const { user, createUser, updateUserProfile, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const name = data.userName;
    const email = data.userEmail;
    const photo = data.userPhotoURL;
    const password = data.userPassword;

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setRegError(
        "Password should have a uppercase and a lowercase and also minimum 6 character!"
      );
      return;
    } else {
      setRegError("");
    }

    createUser(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User Successfully Registered!", {
          position: "top-center",
          theme: "colored",
        });
        console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            setLoading(false);
            addNewUser(user);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message, {
          position: "top-center",
          theme: "colored",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>TasteTreat | Register</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>Register</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span className='text-color9'>/</span>
              <p className='text-color9'>Login</p>
              <span>/</span>
              <p>Register</p>
            </div>
          </div>
        </div>
        <div className='py-24 px-3 md:px-5 lg:px-0 bg-color1'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='md:w-3/5 lg:w-1/3 mx-auto bg-color8 p-10 md:p-14 rounded-xl'>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className='text-lg font-medium'>
                <div>
                  <div className='flex items-center rounded-xl '>
                    <p className='flex bg-color9  p-3 rounded-s-md'>
                      <FaRegUser />
                    </p>
                    <input
                      id='name'
                      type='text'
                      className='w-full rounded-e-md focus:shadow-none focus:border-l-0 focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Name'
                      {...register("userName", { required: true })}
                    />
                  </div>
                  {errors.userName?.type === "required" && (
                    <span className='text-color11'>Name is required!</span>
                  )}
                </div>
                <div>
                  <div className='flex mt-4 items-center rounded-xl'>
                    <p className='flex bg-color9 p-3 rounded-s-md'>
                      <MdOutlineAlternateEmail />
                    </p>
                    <input
                      id='email'
                      type='email'
                      className='w-full rounded-e-md focus:shadow-none focus:border-l-0 focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Email'
                      {...register("userEmail", { required: true })}
                    />
                  </div>
                  {errors.userEmail?.type === "required" && (
                    <span className='text-color11'>Email is required!</span>
                  )}
                </div>
                <div>
                  <div className='mt-4 flex items-center rounded-xl'>
                    <p className='flex bg-color9 p-3 rounded-s-md'>
                      <MdOutlineUploadFile />
                    </p>
                    <input
                      id='photoURL'
                      type='text'
                      className='w-full rounded-e-md focus:shadow-none focus:border-l-0 focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Photo URL'
                      {...register("userPhotoURL", { required: true })}
                    />
                  </div>
                  {errors.userPhotoURL?.type === "required" && (
                    <span className='text-color11'>Photo URL is required!</span>
                  )}
                </div>
                <div>
                  <div className='mt-4 relative flex items-center rounded-xl'>
                    <p className='flex bg-color9 p-3 rounded-s-md'>
                      <RiLockPasswordLine />
                    </p>
                    <input
                      id='password'
                      type={show ? "text" : "password"}
                      className='w-full rounded-e-md focus:shadow-none focus:border-l-0 focus:ring-0 border-color4 px-4 focus:outline-none text-base font-normal text-color2'
                      placeholder='Password'
                      {...register("userPassword", { required: true })}
                    />
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className='cursor-pointer absolute text-color3 right-5'>
                      {show ? (
                        <EyeOff width={20} height={20} />
                      ) : (
                        <Eye width={20} height={20} />
                      )}
                    </div>
                  </div>
                  {
                    <div className='text-color11 text-sm font-normal mt-2'>
                      {regError}
                    </div>
                  }
                  {errors.userPassword?.type === "required" && (
                    <span className='text-color11'>Password is required!</span>
                  )}
                </div>
                <input
                  className={`cursor-pointer block w-full mt-4 bg-color9 font-semibold text-xl py-2`}
                  type='submit'
                  value='Register'
                />
              </form>
              <p className='text-center text-base font-normal text-color1 mt-5'>
                Already have an account?{" "}
                <Link className='text-color9 font-semibold' to='/login'>
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
