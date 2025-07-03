import React, { useState } from "react";
import Content from "./Content";
import "./Second_Page.css";

// Homepage with language toggle
const Homepage = () => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "kh" : "en"));

  const buttonStyle = {
    position: "fixed",
    top: 10,
    right: 10,
    zIndex: 10,
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#7f53ac",
    color: "#fff",
    letterSpacing: 1,
    fontSize: "1rem",
  };

  return (
    <>
      <button
        onClick={toggleLang}
        aria-label="Toggle language"
        style={buttonStyle}
      >
        {lang === "en" ? "KH" : "EN"}
      </button>
      <Content lang={lang} />
    </>
  );
};

export default Homepage;
