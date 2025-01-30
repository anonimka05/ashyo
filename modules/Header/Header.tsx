import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import HeaderCategory from "./HeaderCategory";
import HeaderSearchMobile from "./HeaderSearchMobile";
import CategoryNestedList from "./CategoryNestedList";

function Header() {
  return (
    <header className="mb-[20px] sm:mb-[20px] relative">
      <HeaderTop />
      <HeaderMain />
      <HeaderCategory />
      <HeaderSearchMobile />
      <CategoryNestedList />
    </header>
  );
}

export default Header;
