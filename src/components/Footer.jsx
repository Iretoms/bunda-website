import styled from "styled-components";
import {useLocation} from "react-router-dom";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import logo from "../assets/png/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
    const location = useLocation()
  return (
    <StyledFooter>
      <Container>
        <motion.div className="logo">
          <img src={logo} alt="logo" />
        </motion.div>
        <div>
          <p>Where visibility matters, Think Bunda.</p>
        </div>
        <div className="description">
          <p>
            {location.pathname === "/"
              ? "Need tailored advice for conversion increase, audience engagement boost, product and services promotion for maximal profit? Holla!"
              : "Are you looking to build a stunning landing page or full web applications for your company or as an individual project? then feel free to contact us, we are here to make your imaginations come true."}
          </p>
        </div>
        <div className="socialLinks">
          <a
            href="https://www.instagram.com/bundaktensolutions_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram fill="#fff" size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/company/bundaktensolutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin fill="#fff" size="1.5rem" />
          </a>
          <a
            href="mailto:info.bundakten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope fill="#fff" size="1.5rem" />
          </a>
        </div>
        <div>
          <p>&copy; 2022 Bunda Digital Solutions</p>
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 60vh;
  background-color: ${(props) => props.theme.blue};
`;

const Container = styled.div`
  width: 87%;
  margin: 0 auto;
  padding: 5rem 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  p {
    font-weight: 500;
  }

  .logo {
    width: 9rem;
    margin-bottom: 1rem;
    img {
        width: 100%;
    }
  }

  .description {
    margin-top: 1rem;
    text-align: center;
  }

  .socialLinks {
    margin: 2rem 0 4rem;
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default Footer;
