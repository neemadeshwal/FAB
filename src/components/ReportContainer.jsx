import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { PiLinkSimpleBold } from "react-icons/pi";
import Dropdown from "./Dropdown";

export default function ReportContainer({
  handleFeatureClose,
  formData,
  setFormData,
}) {
  const [isSectionSelected, setIsSectionSelected] = useState(false);
  const [selectedInput, setSelectedInput] = useState("interview question");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmitBtn() {
    handleFeatureClose(false);
  }
  return (
    <div>
      <div className="single-feature-container">
        <div className="headings-container">
          <p className="headings-title">
            Let us know about the <span>issue</span> you are facing right now!
          </p>
        </div>
        <div
          className="dropdown-underline"
          style={{ marginTop: "2.4rem", background: "lightgray" }}
        />
        <div className="form-input">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <Dropdown formData={formData} setFormData={setFormData} />
            </div>

            <div className="issue-container">
              <label htmlFor="issue">describe the issue in detail</label>
              <div className="text-area">
                <textarea
                  style={{
                    outline: "none",
                    border: "0",
                    marginTop: "1rem",
                    background: "transparent",
                    resize: "none",
                  }}
                  rows={4}
                  cols={30}
                  name="issue"
                  id="issue"
                  value={formData.issue}
                  placeholder="write here..."
                  onChange={(e) =>
                    setFormData((prevVal) => ({
                      ...prevVal,
                      issue: e.target.value,
                    }))
                  }
                ></textarea>
                <div className="attach-container">
                  <PiLinkSimpleBold style={{ width: "24px", height: "24px" }} />
                  <p>attach</p>
                </div>
              </div>
            </div>
            {!isLoggedIn && (
              <div className="email-container">
                <label htmlFor="email">
                  enter your email to receive an update
                </label>
                <input
                  style={{ marginTop: "3px" }}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                />
              </div>
            )}
            <div className="submit-btn-container">
              <button
                onClick={handleSubmitBtn}
                className={`${
                  formData.issue !== "" ? "submit-btn" : "dont-submit"
                }`}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
