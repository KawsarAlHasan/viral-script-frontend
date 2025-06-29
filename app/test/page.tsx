"use client";

import ThemeSwitcher from "../_components/Theme";

const Header = () => {
  return (
  <div>

      <div className="min-h-screen theme-container">
    <ThemeSwitcher />
      hello world
      <button className="c-button">Click</button>
    </div>
   
  </div>
  );
};

export default Header;
