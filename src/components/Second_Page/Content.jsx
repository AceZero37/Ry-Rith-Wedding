import React from "react";
import Wedding_Days from "./Wedding_Days";
import Music from "../First_Page/Music";
import "../First_Page/First_Page.css"; // Import First_Page styles for music button, etc.

const Content = ({ lang = "en" }) => {
  return (
    <>
      <Wedding_Days lang={lang} />
      <Music />
    </>
  );
};

export default Content;
