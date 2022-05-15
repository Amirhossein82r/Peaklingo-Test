import { useEffect, useState } from "react";
import { timingClassList } from "../../utils/timingClassList";

const HamburgerSideBar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState<boolean>(false);
  useEffect(() => {
    const navbar: HTMLDivElement = document.getElementById(
      "navbar"
    ) as HTMLDivElement;
    if (!isNavbarActive) timingClassList(navbar, "hambur-close", 1000);
  }, [isNavbarActive]);
  return (
    <>
      <div
        className={`hamburIcon ${isNavbarActive ? "hamburIcon--active" : ""}`}
        onClick={() => setIsNavbarActive(!isNavbarActive)}
      >
        <div className="hamburIcon-line hamburIcon-top"></div>
        <div className="hamburIcon-line hamburIcon-mid"></div>
        <div className="hamburIcon-line hamburIcon-bottom"></div>
      </div>
      <div className={`hambur ${isNavbarActive ? "hambur--active" : ""}`}>
        <h2>رحمانی تست</h2>
      </div>
    </>
  );
};

export default HamburgerSideBar;
