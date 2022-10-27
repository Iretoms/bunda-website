import styled from "styled-components";
import {useLocation} from "react-router-dom";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import logoWhite from "../assets/png/logoWhite.png";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";

const Footer = () => {
    const location = useLocation()
  return (
    <StyledFooter>
      <Container>
        <motion.div
          className="logo"
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.8 }}
        >
          <motion.img variants={textAnimate} src={logoWhite} alt="logo" />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.8 }}
        >
          <motion.p variants={textAnimate}>
            Where visibility matters, Think Bunda.
          </motion.p>
        </motion.div>
        <motion.div
          className="description"
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.p variants={textAnimate}>
            {location.pathname === "/"
              ? "Need tailored advice for conversion increase, audience engagement boost, product and services promotion for maximal profit? Holla!"
              : "Are you looking to build a stunning landing page or full web applications for your company or as an individual project? then feel free to contact us, we are here to make your imaginations come true."}
          </motion.p>
        </motion.div>
        <motion.div
          className="socialLinks"
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.a
            variants={textAnimate}
            href="https://www.instagram.com/bundak_10/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram fill="#fff" size="1.5rem" />
          </motion.a>
          <motion.a
            variants={textAnimate}
            href="https://www.linkedin.com/company/bundakten-solutons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin fill="#fff" size="1.5rem" />
          </motion.a>
          <motion.a
            variants={textAnimate}
            href="mailto:info@bundakten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope fill="#fff" size="1.5rem" />
          </motion.a>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.8 }}
        >
          <motion.p variants={textAnimate}>
            &copy; 2022 Bunda Digital Solutions
          </motion.p>
        </motion.div>
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
