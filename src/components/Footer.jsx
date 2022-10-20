import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>

            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
width: 100%;
min-height: 88vh;
background-color: ${props => props.theme.blue};
`

const Container = styled.div`
    
`

export default Footer;