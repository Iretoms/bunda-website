import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../assets/png/logo.png";

const Loader = () => {
  return (
    <Container>
      <StyledLogo
        animate={{ x: [0, 300], opacity: [1, 0] }}
        transition={{ delay: 3.5, duration: 2, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [-200, 0], opacity: [0.5, 1] }}
          transition={{ duration: 1, type: "spring", bounce: 1 }}
          className="logo-image"
        >
          <img src={logo} alt="logo" />
        </motion.div>
      </StyledLogo>
    </Container>
  );
};

const Container = styled(motion.section)`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
`;

const StyledLogo = styled(motion.div)`
  min-width: 20rem;
  display: flex;
  align-items: center;
  .logo-image {
    width: 10rem;
    height: 6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 40rem) {
    .logo-image {
      margin-left: 4rem;
      width: 10rem;
    }
  }
`;

export default Loader;
