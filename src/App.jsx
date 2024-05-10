import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div className='font-nunito'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
