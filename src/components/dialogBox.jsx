import { FaCaretDown } from "react-icons/fa";

export default function DialogBox({ message }) {
  return (
    <div className="dialog-box-container">
      <div className="dialog-box">
        <p>{message}</p>
        <FaCaretDown className="point-down" />
      </div>
    </div>
  );
}
