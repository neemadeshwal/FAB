/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isShowFeatures, setIsShowFeatures] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmitBtn() {
    // setIsSubmitted(true);
    setIsShowFeatures(false);
  }
  return (
    <AppContext.Provider
      value={{
        isShowFeatures,
        setIsShowFeatures,
        isSubmitted,
        setIsSubmitted,
        handleSubmitBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
