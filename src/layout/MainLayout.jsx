import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Navbar */}
      <Navbar />
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default MainLayout;
