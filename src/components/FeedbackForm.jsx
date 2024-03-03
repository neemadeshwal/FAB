/* eslint-disable react/prop-types */
import { PiLinkSimpleBold } from "react-icons/pi";
export default function FeedbackForm({
  handleFeatureClose,
  formData,
  setFormData,
}) {
  function handleSubmitBtn() {
    handleFeatureClose(false);
  }
  return (
    <div className="single-feature-container">
      <div className="headings-container">
        <p className="headings-title">
          Let us know your <span className="highlight-keyword">Feedback</span>{" "}
          about us!
        </p>
      </div>
      <div
        className="dropdown-underline"
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          background: "lightgray",
        }}
      />

      <div className="write">
        <div className="write-feedback">
          <textarea
            name="feedback"
            id="feedback"
            value={formData.feedback}
            onChange={(e) =>
              setFormData((prevVal) => ({
                ...prevVal,
                feedback: e.target.value,
              }))
            }
            placeholder="write here...."
            rows={5}
            cols={35}
            style={{
              fontSize: "1.1rem",
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
        <div className="check-anonymous-container">
          <input type="checkbox" name="submit-anonyms" id="submitAnonyms" />
          <label htmlFor="submitAnonymous" className="anonymous-feedback-title">
            send feedback anonymously
          </label>
        </div>
      </div>
      <div className="submit-btn-container" style={{ marginTop: "7rem" }}>
        <button
          onClick={handleSubmitBtn}
          className={`${
            formData.feedback !== 0 ? "submit-btn" : "dont-submit"
          }`}
        >
          submit
        </button>
      </div>
    </div>
  );
}
