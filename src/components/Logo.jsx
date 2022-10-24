import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/png/logo.png"

const Logo = () => {
    return (
      <StyledLogo>
        <Link to="/">
          <img src={logo} alt="logo" />
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