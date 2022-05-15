import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HamburgerSideBar from "../HamburgerSideBar";

const H5 = styled.h5`
  color: #fff;
`;

const Header = () => {
  const [time, setTime] = useState<number>(0);
  const [timerOn] = useState<boolean>(true);
  useEffect(() => {
    if (timerOn) {
      setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  }, [timerOn]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#" id="watch">
          رحمانی تست
        </Link>
        <H5>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          {("0" + ((time / 10) % 100)).slice(-2)}
        </H5>
        <HamburgerSideBar />
      </div>
    </nav>
  );
};

export default Header;
