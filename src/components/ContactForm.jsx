/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DialogBox from "./dialogBox";
import { useGlobalContext } from "../context";
export default function ContactForm({ formData, setFormData }) {
  const {
    isShowFeatures,
    setIsShowFeatures,
    isSubmitted,
    setIsSubmitted,
    handleSubmitBtn,
  } = useGlobalContext();
  function handleContactData(e) {
    const { name, value } = e.target;
    setFormData((prevVal) => ({ ...prevVal, [name]: value }));
  }
  useEffect(() => {
    if (!isShowFeatures) {
      setIsSubmitted(true);
    }
  });

  return (
    <div className="single-feature-container" style={{}}>
      <div className="headings-container">
        <div className="headings-title">
          Get in <span className="highlight-keyword">Contact with us</span> for
          your queries!
        </div>
      </div>
      <div
        className="dropdown-underline"
        style={{ marginTop: "2.4rem", background: "lightgray" }}
      />
      <div className="name-container">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Enter your Name"
          value={formData.name}
          onChange={handleContactData}
        />
      </div>
      <div className="write">
        <label className="describe-label name-container">
          What would you like to ask?
          <span className="" style={{ fontSize: "20px", color: "red" }}>
            *
          </span>
        </label>

        <div className="write-feedback" style={{ marginTop: "1rem" }}>
          <textarea
            name="question"
            id="question"
            placeholder="write here...."
            value={formData.question}
            rows={4}
            onChange={handleContactData}
            cols={35}
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
        </div>
      </div>
      <div className="submit-btn-container" style={{ marginTop: "4rem" }}>
        <button
          onClick={handleSubmitBtn}
          className={`${
            formData.name !== "" && formData.question !== 0
              ? "submit-btn"
              : "dont-submit"
          }`}
        >
          submit
        </button>
      </div>
      {isSubmitted && (
        <DialogBox message="Thanks for reaching out to us! We will get back to you as soon as possible" />
      )}
    </div>
  );
}
