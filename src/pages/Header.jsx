import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Header() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
}
