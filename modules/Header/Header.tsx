import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderCategory from "./HeaderCategory";
import HeaderSearchMobile from "./HeaderSearch";

function Header() {
  return (
    <header className="mb-[20px] sm:mb-[20px]">
      <HeaderTop />
      <HeaderMain />
      <HeaderCategory />
      <HeaderSearchMobile />
    </header>
  );
}

export default Header;
