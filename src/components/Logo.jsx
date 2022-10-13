import styled from "styled-components";
import logo from "../assets/png/logo.png"

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="logo" />
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