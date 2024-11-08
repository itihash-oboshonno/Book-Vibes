import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="mx-5">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="bg-neutral">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
