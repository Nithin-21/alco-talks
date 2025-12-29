import React from "react";

function Header({ query, onQueryChange, onLogoClick }) {
  return (
    <header className="top-header">
      {/* LEFT: LOGO */}
      <div className="header-left">
        <img
          src="/logo.png"
          alt="Alco-Talks Logo"
          className="header-logo"
          onClick={onLogoClick}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* CENTER: SEARCH */}
      <div className="header-center">
        <input
          className="header-search"
          placeholder="Search brands..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>

      {/* RIGHT: EMPTY (reserved for future) */}
      <div className="header-right"></div>
    </header>
  );
}

export default Header;
