/* eslint-disable react/prop-types */
import e from "cors";
import Dropdown from "./Dropdown";
import { PiLinkSimpleBold } from "react-icons/pi";

export default function Suggestion({
  handleFeatureClose,
  formData,
  setFormData,
}) {
  function handleSubmitBtn() {
    handleFeatureClose(false);
  }
  return (
    <div className="single-feature-container" style={{ height: "70vh" }}>
      <div className="headings-container">
        <div className="headings-title">
          Share your <span className="highlight-keyword">Suggestions</span> with
          us for a chance to earn rewards!
        </div>
      </div>
      <div
        className="dropdown-underline"
        style={{ marginTop: "2.4rem", background: "lightgray" }}
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="dropdown-container" style={{ marginTop: "1rem" }}>
          <Dropdown formData={formData} setFormData={setFormData} />
        </div>
        <div className="describe-container">
          <div className="describe-label">
            Describe the suggestion in detail{" "}
            <span className="" style={{ fontSize: "20px", color: "red" }}>
              *
            </span>
          </div>
          <div className="write">
            <div className="write-feedback">
              <textarea
                name="question"
                id="question"
                placeholder="write here...."
                rows={4}
                cols={35}
                value={formData.question}
                onChange={(e) =>
                  setFormData((prevVal) => ({
                    ...prevVal,
                    question: e.target.value,
                  }))
                }
                style={{
                  fontSize: "0.9rem",
                  padding: "6px 1rem",
                  background: "transparent",
                  resize: "none",
                  border: "0",
                  outline: "none",
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                }}
              />
              <div className="attach-container">
                <PiLinkSimpleBold style={{ width: "24px", height: "24px" }} />
                <p>attach</p>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-btn-container">
          <button
            onClick={handleSubmitBtn}
            className={`${
              formData.question !== 0 ? "submit-btn" : "dont-submit"
            }`}
            style={{ marginTop: "2.5rem" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
