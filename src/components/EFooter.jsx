import { useContext } from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import logoWhite from "../assets/png/logoWhite.png";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";

const EFooter = () => {
  const { dispatch } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const clickHandler = () => {
    localStorage.removeItem("user");
    dispatch({
      type: "USER_LOGOUT",
    });
    navigate("/sign-in");
  };
  return (
    <StyledFooter>
      <Container>
        <motion.div
          className="description"
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.8 }}
        >
          <div className="logo">
            <motion.img variants={textAnimate} src={logoWhite} alt="logo" />
          </div>
          <motion.p variants={textAnimate}>
            Craft a captivating cover letter or pitch deck that showcases your
            business idea's potential. For a norminal one-time fee of $39.99,
            we'll present your ideas to our panel of experts, professionals and
            angel investors.
          </motion.p>
          <motion.p variants={textAnimate}>
            Successful candidates could secure up to $30,000 in seed funding,
            regardless of your industry - whether you are into tech, content
            creation, music, fashion design or everyday goods and services. This
            is your opportunity to supercharge your business and take your brand
            to the world.
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

        {location.pathname === "/get-started" && (
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.8 }}
          >
            <motion.p
              variants={textAnimate}
              className="signout"
              onClick={clickHandler}
            >
              Sign Out
            </motion.p>
          </motion.div>
        )}

        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.8 }}
        >
          <motion.p variants={textAnimate} className="copyright">
            Copyright &copy; {year} Bunda
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
  padding: 5rem 0;
  color: #fff;

  p {
    font-weight: 500;
  }

  .description {
    text-align: center;
    .logo {
      width: 9rem;
      margin: 0 auto 1rem;
      img {
        width: 100%;
      }
    }
    p {
      width: 85%;
      margin: 0 auto 2rem;
    }
  }

  .socialLinks {
    margin: 3.5rem auto 3rem;
    width: 8rem;
    display: flex;
    justify-content: space-between;
  }

  .signout {
    cursor: pointer;
    text-decoration: underline;
    margin-bottom: 2rem;
  }

  .copyright,
  .signout {
    text-align: center;
  }

  @media screen and (max-width: 40rem) {
    .description {
      p {
        width: 100%;
      }
    }
  }
`;

export default EFooter;
