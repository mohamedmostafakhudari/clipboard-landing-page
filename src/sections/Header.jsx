import React from "react";
import backgroundUrlMobile from "../assets/images/bg-header-mobile.png";
import backgroundUrlDesktop from "../assets/images/bg-header-desktop.png";
import HeaderCTA from "../components/HeaderCTA";
import useWindowSize from "../hooks/useWindowSize";
import { styles } from "../styles";

export default function Header() {
  const { width: viewportWidth } = useWindowSize();
  const backgroundStyle = {
    backgroundImage:
      viewportWidth < 768
        ? `url(${backgroundUrlMobile})`
        : `url(${backgroundUrlDesktop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header className={``} style={backgroundStyle}>
      <HeaderCTA />
    </header>
  );
}
