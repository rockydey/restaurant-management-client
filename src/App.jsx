import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className='font-nunito bg-color2 text-color8'>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
