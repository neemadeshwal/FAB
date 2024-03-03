import { RxCaretDown } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="">
      <div className="navbar-container">
        <div className="navbar-center">
          <div>
            <h2 className="logo-name">
              the <span className="logo-name-child">product</span> platform
            </h2>
          </div>
          <div className="nav-links-container">
            <div className="nav-links">
              <p>Learn</p>
              <RxCaretDown />
            </div>
            <div className="nav-links">
              <p>practice</p>
              <RxCaretDown />
            </div>
            <div>
              <FaUserCircle style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}
