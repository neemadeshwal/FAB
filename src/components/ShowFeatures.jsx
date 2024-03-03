/* eslint-disable react/prop-types */
import { FaFlag } from "react-icons/fa";
import { MdThumbsUpDown } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { useState } from "react";
import ReportContainer from "./ReportContainer";
import FeedbackForm from "./FeedbackForm";
import SuggestionForm from "./SuggestionForm";
import ContactForm from "./ContactForm";
export default function ShowFeatures() {
  const [isReportContainerOpen, setIsReportContainerOpen] = useState(false);
  const [isFeedbackContainerOpen, setIsFeedbackContainerOpen] = useState(false);
  const [clickedFeature, setClickedFeature] = useState("");
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);

  const [isSuggestionContainerOpen, setIsSuggestionContainerOpen] =
    useState(false);

  const [isContactContainerOpen, setIsContactContainerOpen] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    question: "",
  });

  const [FeedbackData, setFeedbackData] = useState({
    feedback: "",
  });

  const [reportData, setReportData] = useState({
    select: "",
    issue: "",
  });

  const [suggestionData, setSuggestionData] = useState({
    select: "",
    question: "",
  });

  function handleFeatureClick(id, containerOpen) {
    setClickedFeature(id);
    setIsFeatureOpen(true);
    setIsReportContainerOpen(false);
    setIsFeedbackContainerOpen(false);
    setIsSuggestionContainerOpen(false);
    setIsContactContainerOpen(false);
    containerOpen(true);
  }

  function handleReportIssueClick() {
    handleFeatureClick("reportissue", setIsReportContainerOpen);
  }

  function handleShareFeedbackClick() {
    handleFeatureClick("sharefeedback", setIsFeedbackContainerOpen);
  }

  function handleGiveSuggestionClick() {
    handleFeatureClick("givesuggestion", setIsSuggestionContainerOpen);
  }

  function handleContactUsClick() {
    handleFeatureClick("contactus", setIsContactContainerOpen);
  }

  function handleShowFeatures() {
    setIsFeatureOpen(false);
  }

  return (
    <div
      style={{ position: "absolute", bottom: 0, right: 0, background: "blue" }}
    >
      <div
        className={`${isFeatureOpen ? "horizontal-display" : ""}${
          !isFeatureOpen ? "vertical-display" : ""
        }
        
        show-features-container`}
      >
        <div className="single-feature-box">
          <div
            className={`${
              clickedFeature === "reportissue" && "ring"
            } hover-ring`}
            //   style={{border:{clickedFeature ==="reportissue"? "2px solid rgb(75,75,75)": 0
            // }}}
          >
            <FaFlag
              id="reportissue"
              className={`single-feature-icon `}
              onClick={handleReportIssueClick}
            />
          </div>
          {!isFeatureOpen && (
            <p className="single-feature-title">Report an issue</p>
          )}
        </div>
        <div className="single-feature-box">
          <div
            className={`${
              clickedFeature === "sharefeedback" && "ring reduce-icon-size"
            } hover-ring`}
          >
            <MdThumbsUpDown
              id="sharefeedback"
              className="single-feature-icon"
              onClick={handleShareFeedbackClick}
            />
          </div>
          {!isFeatureOpen && (
            <p className="single-feature-title">share feedback</p>
          )}
        </div>

        <div className="single-feature-box">
          <div
            className={`${
              clickedFeature === "givesuggestion" && "ring"
            } hover-ring`}
          >
            <MdEditNote
              onClick={handleGiveSuggestionClick}
              className="single-feature-icon"
              id="givesuggestion"
            />
          </div>
          {!isFeatureOpen && (
            <p className="single-feature-title">give suggestion</p>
          )}
        </div>
        <div className="single-feature-box">
          <div
            className={`${clickedFeature === "contactus" && "ring"} hover-ring`}
          >
            <LuMessagesSquare
              onClick={handleContactUsClick}
              id="contactus"
              className="single-feature-icon"
            />
          </div>
          {!isFeatureOpen && (
            <p
              style={{ textAlign: "end", marginLeft: "2rem" }}
              className="single-feature-title"
            >
              contact us
            </p>
          )}
        </div>
      </div>
      {isReportContainerOpen && (
        <ReportContainer formData={reportData} setFormData={setReportData} />
      )}
      {isFeedbackContainerOpen && (
        <FeedbackForm formData={FeedbackData} setFormData={setFeedbackData} />
      )}
      {isSuggestionContainerOpen && (
        <SuggestionForm
          formData={suggestionData}
          setFormData={setSuggestionData}
        />
      )}
      {isContactContainerOpen && (
        <ContactForm formData={contactData} setFormData={setContactData} />
      )}
    </div>
  );
}
