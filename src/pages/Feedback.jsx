import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaChevronDown,
  FaEdit,
  FaEye,
  FaInfoCircle,
  FaThumbsUp,
  FaUserCircle,
} from "react-icons/fa";
import { FaFileSignature, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import rocketicon from "../assets/rocket.png";
import ShowFeatures from "../components/ShowFeatures";
import { PiChat } from "react-icons/pi";
import Rateus from "../components/Rateus";
import { useGlobalContext } from "../context";
export default function Feedback() {
  const { isShowFeatures, setIsShowFeatures } = useGlobalContext();
  const [showRateCard, setShowRateCard] = useState(false);

  return (
    <div className="feedback-container">
      <div className="dark-screen"></div>

      <div className="back-to-question-container">
        <Link to="/question" style={{ textDecoration: "none", color: "white" }}>
          <p className="back-to-ques-link">
            <span>
              <FaArrowLeft
                className=""
                style={{
                  fontSize: "1.5rem",
                  marginRight: "5px",
                  marginTop: "3px",
                }}
              />
            </span>
            Back to Questions
          </p>
        </Link>
      </div>
      <div className="feedback-inner-container">
        <div
          className="feedback-content"
          style={{ width: "100%", marginTop: "4rem" }}
        >
          <div className="question-container" style={{ marginBottom: "0" }}>
            <div className="ques-category-container">
              <p>design</p>
              <p>technology</p>
            </div>
            <div className="ques-startup">
              <img
                src={rocketicon}
                alt=""
                style={{ width: "35px", height: "35px" }}
              />
              <p
                style={{
                  color: "#4d4d4d",
                  fontWeight: 600,
                  margin: 0,
                  fontSize: "0.9rem",
                }}
              >
                Startup
              </p>
            </div>

            <div className="question-answer-container">
              <p style={{ fontWeight: 600 }}>
                A travel startup wants Amazon to pre-install their personal
                travel agent bot on existing Amazon Echos. What is the value of
                the partnership to the travel startup?{" "}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet
                nec viverra tincidunt ? Amet ullamcorper velit tristique
                scelerisque donec sed viverra arcu. Amet arcu vitae sit
                scelerisque ultrices magna cursus se?{" "}
              </p>
            </div>
            <div className="bottom-container">
              <div className="views-container">
                <FaEye style={{ fontSize: "1rem", marginRight: "8px" }} />
                <p>100 views</p>
              </div>
              <div className="info-container">
                <FaInfoCircle />
                <p>How should you word your answer?</p>
              </div>
            </div>
          </div>
          <div className="answer-category">
            <p>Answers(23)</p>
            <p>
              Sortby :
              <span
                style={{
                  background: "white",
                  borderRadius: "6px",
                  padding: "3px 5px",
                  color: "black",
                  width: "4rem",
                  marginLeft: "7px",
                }}
              >
                Popular
                <FaChevronDown />
              </span>
            </p>
          </div>
          <div className="answer-container" style={{ height: "32vh" }}>
            <div className="answer-container-profile">
              <FaUserCircle className="" style={{ fontSize: "2rem" }} />
              <div>
                <p style={{ margin: 0 }}>
                  <span style={{ fontWeight: 800, color: "black" }}>
                    Neha bhat
                  </span>{" "}
                  (you)
                </p>
                <p style={{ margin: 0, marginTop: "2px", fontSize: "0.8rem" }}>
                  June 27,2023
                </p>
              </div>
            </div>
            <div className="answer-edit">
              <FaEdit />
              <p>Edit</p>
            </div>
            <div className="" style={{ marginTop: "3.2rem" }}>
              <div style={{ marginBottom: "0", fontSize: "0.9rem" }}>
                Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum
                enim ornare feugi vitae. Eget proin aliquam blandit eget vitae
                erat fermentum lacus. Dignissim done mi vel fermentum. Id
                ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio
                egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam
                ridiculus
                <span className="" style={{ color: "#808080" }}>
                  ipsum interdum ut velit quam. Bibendum amet mi....
                </span>
                <span className="" style={{ fontWeight: 600, color: "black" }}>
                  Show more
                </span>
              </div>
              <div
                className="answer-comment-container"
                style={{ height: "10vh" }}
              >
                <p
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <FaThumbsUp className="" style={{ fontSize: "1.3rem" }} />{" "}
                  <p>like</p>
                </p>
                <p>
                  <PiChat className="" style={{ fontSize: "2rem" }} />
                </p>
                <input
                  style={{
                    padding: "6px 12px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    width: "20vw",

                    border: "1px solid gray",
                  }}
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="add a comment"
                />
                <button
                  style={{
                    background: "white",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "7px 12px",
                    fontSize: "1rem",
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fab-container">
        {isShowFeatures ? (
          <div
            onClick={() => setIsShowFeatures(false)}
            className="feedback-feature-icon-container"
          >
            <FaTimes className="feedback-feature-icon" />
          </div>
        ) : (
          <div
            className="feedback-feature-icon-container"
            onClick={() => setIsShowFeatures(true)}
          >
            <FaFileSignature className="feedback-feature-icon" />
          </div>
        )}
      </div>

      {isShowFeatures && <ShowFeatures />}
      {<Rateus />}
    </div>
  );
}
