import { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
export default function Rateus() {
  const [showRateCard, setshowRateCard] = useState(true);
  const [ratingValue, setRatingValue] = useState(0);
  const [showMsg, setShowMsg] = useState(false);
  function handleStarValue(value) {
    setRatingValue(value);
  }
  function handleRateusBtn() {
    setshowRateCard(false);
    setShowMsg(true);
  }
  useEffect(() => {
    if (showMsg) {
      setTimeout(() => {
        setShowMsg(false);
      }, 2000);
    }
  }, [showMsg]);
  return (
    <div>
      {showRateCard && (
        <div className="rateus-container">
          <div className="close-btn">
            <FaTimes onClick={() => setshowRateCard(false)} />
          </div>
          <p style={{ fontWeight: 600, textAlign: "center" }}>
            rate your experience with us!
          </p>
          <div className="rating-star-container">
            {[...Array(5)].map((star, index) => {
              return (
                <div key={index + 1} onClick={() => handleStarValue(index + 1)}>
                  {index + 1 <= ratingValue ? (
                    <BsStarFill className="coloredstar" />
                  ) : (
                    <BsStar className="emptystar" />
                  )}
                </div>
              );
            })}
          </div>
          {ratingValue > 0 && (
            <button className="rate-btn" onClick={handleRateusBtn}>
              Rate us
            </button>
          )}
        </div>
      )}
      {showMsg && (
        <div className="rateus-container">
          <div className="close-btn">
            <FaTimes onClick={() => setShowMsg(false)} />
          </div>
          <p
            style={{ textAlign: "center", fontWeight: 600, marginTop: "3rem" }}
          >
            Thank you for taking the time to rate us!
          </p>
        </div>
      )}
    </div>
  );
}
