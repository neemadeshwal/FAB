/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { DropDownArray } from "./contentData";
export default function Dropdown({ formData, setFormData }) {
  const [isSectionSelected, setIsSectionSelected] = useState(false);

  function handleFormData(name) {
    setFormData((prevVal) => ({ ...prevVal, select: name }));
    setIsSectionSelected(false);
  }

  return (
    <div>
      <div className="dropdown-section">
        <label htmlFor="section">Choose a section</label>
        <div className="dropdowncontainer">
          <div
            className="dropdown-label"
            onClick={() => setIsSectionSelected((prevVal) => !prevVal)}
          >
            <p>{formData.select === "" ? "select" : formData.select}</p>
            <RxCaretDown
              style={{ fontSize: "1.8rem" }}
              className={`${isSectionSelected && "rotated"}`}
            />
          </div>
          {isSectionSelected && (
            <div className="dropdown-option-container">
              {DropDownArray.map((item) => {
                return (
                  <div
                    style={{
                      zIndex: "999",
                      padding: "0px 14px",
                      cursor: "pointer",
                    }}
                    className="hover-input"
                    key={crypto.randomUUID()}
                    onClick={() => handleFormData(item)}
                  >
                    <p style={{ margin: 0, padding: "8px " }}>{item}</p>
                    {DropDownArray.indexOf(item) !==
                      DropDownArray.length - 1 && (
                      <div
                        className="dropdown-underline"
                        style={{
                          backgroundColor: "#CCCCCC",
                          padding: 0,
                          margin: 0,
                        }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
