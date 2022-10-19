import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { headerAnimate } from "../animation";
// import { FaAngleDown } from "react-icons/fa";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileNavHandler = () => {
    setMobileOpen(!mobileOpen);
  };

  mobileOpen
    ? document.body.classList.add("fixed")
    : document.body.classList.remove("fixed");

  return (
    <StyledHeader>
      <StyledNav variants={headerAnimate} initial="hide" animate="show">
        <Logo />
        <ThemeToggle />
        <MenuBar className={mobileOpen && "active"} onClick={mobileNavHandler}>
          <span></span>
          <span></span>
          <span></span>
        </MenuBar>
        <AnimatePresence>{mobileOpen && (<Nav setMobileOpen={setMobileOpen}/>)}</AnimatePresence>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  border-bottom: ${(props) => props.theme.BB};
  background-color: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
  
`;

const StyledNav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  margin: 0 auto;

  @media screen and (max-width: 40rem) {
    width: 90%;
  }
`;

const MenuBar = styled.div`
  z-index: 50;
  cursor: pointer;
  transition: all 0.3s linear;
  span {
    background-color: ${(props) => props.theme.menuBar};
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  &.active {
    transition-delay: 0.8s;
    transform: rotate(45deg);
    span {
      background-color: #fff;
    }
    span:nth-child(2) {
      width: 0;
    }
    span:nth-child(1),
    span:nth-child(3) {
      transition-delay: 0.4s;
    }
    span:nth-child(1) {
      transform: translateY(9px);
    }
    span:nth-child(3) {
      transform: translateY(-9px) rotate(90deg);
    }
  }
`;

export default Header;
