import React from "react";

const Header = ({ lang, onLangSwitch }) => (
  <header
    className="w-100 d-flex justify-content-end p-3 position-absolute top-0 end-0"
    style={{ zIndex: 2 }}
  >
    <button className="btn btn-outline-secondary" onClick={onLangSwitch}>
      <span style={{ fontWeight: lang === "kh" ? "bold" : "normal" }}>KH</span>
      {" / "}
      <span style={{ fontWeight: lang === "en" ? "bold" : "normal" }}>EN</span>
    </button>
  </header>
);

export default Header;
