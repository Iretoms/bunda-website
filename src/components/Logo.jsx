import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/png/logo.png"
import logoWhite from "../assets/png/logoWhite.png";
import { ThemeContext } from "../context/ThemeContext";

const Logo = () => {
  const { theme } = useContext(ThemeContext);

    return (
      <StyledLogo>
        <Link to="/">
          <img src={theme === "light" ? logo : logoWhite} alt="logo" />
        </Link>
      </StyledLogo>
    );
};

const StyledLogo = styled.div`
    img {
        height: 2.7rem;
        width: 5.3rem;
    }
`

export default Logo;