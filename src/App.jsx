import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div className='font-nunito'>
      <Header />
      <div className='max-w-screen-xl mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
