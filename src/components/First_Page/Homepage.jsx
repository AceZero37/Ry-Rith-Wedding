import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./First_Page.css";
import Music from "./Music";

const text = {
  en: {
    initials: "R&R",
    names: "Sovan Narith & Vy Chanry",
    join: "Please Join Our Wedding",
    button: "View More",
    thank: "Thank you for joining us on our special day",
  },
  kh: {
    initials: "R&R",
    names: "សុវណ្ណ ណារិទ្ធ & វី ចាន់រី",
    join: "សូមចូលរួមពិធីមង្គលការរបស់ពួកយើង",
    button: "មើលបន្ថែម",
    thank: "សូមអរគុណដែលបានចូលរួមថ្ងៃពិសេសរបស់យើង",
  },
};

const Homepage = () => {
  const [lang, setLang] = useState("en");
  const handleLangSwitch = () =>
    setLang((prev) => (prev === "en" ? "kh" : "en"));

  return (
    <div className="first-page-bg d-flex flex-column justify-content-center align-items-center position-relative">
      <div className="first-page-overlay" />
      <Header lang={lang} onLangSwitch={handleLangSwitch} />
      <Content text={text[lang]} lang={lang} />
      <Footer text={text[lang]} />
      <Music />
    </div>
  );
};

export default Homepage;
