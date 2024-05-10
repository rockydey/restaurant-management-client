import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/search.png";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [show, setShow] = useState(false);

  const handleLogin = (data) => {
    const email = data.userEmail;
    const password = data.userPassword;

    console.log(email, password);
  };

  return (
    <div>
      <Helmet>
        <title>TasteTreat | Login</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[40vh] bg-cover bg-center bg-no-repeat bg-color10 bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>Login</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>Home</p>
              <span>/</span>
              <p>Login</p>
            </div>
          </div>
        </div>
        <div className='py-24 px-3 md:px-5 lg:px-0 bg-color1'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='md:w-3/5 lg:w-1/3 mx-auto bg-color8 p-10 md:p-14 rounded-xl'>
              <form
                onSubmit={handleSubmit(handleLogin)}
                className='text-lg font-medium'>
                <div>
                  <div className='flex items-center rounded-xl'>
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
                  {errors.userPassword?.type === "required" && (
                    <span className='text-color11'>Password is required!</span>
                  )}
                </div>
                <p className='mt-4  underline cursor-pointer text-base text-color9 font-medium'>
                  Forget Password?
                </p>
                <input
                  className={`cursor-pointer block w-full mt-4 bg-color9 font-semibold text-xl py-2`}
                  type='submit'
                  value='Login'
                />
              </form>
              <div className='text-color3 flex items-center gap-5 justify-center my-5'>
                <div className='border-b-2 border-color4 w-24'></div>
                <p>OR</p>
                <div className='border-b-2 border-color4 w-24'></div>
              </div>
              <div className='text-xl border-2 border-color4 py-2 px-5 rounded-full justify-center cursor-pointer w-fit text-color2 font-semibold flex items-center gap-3 mx-auto'>
                <img className='w-6' src={googleIcon} alt='' />
                <p>Login with Google</p>
              </div>
              <p className='text-center text-base font-normal text-color1 mt-5'>
                New to this website?{" "}
                <Link className='text-color9 font-semibold' to='/register'>
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
