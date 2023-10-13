import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";

const EAbout = () => {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="head">
            About Us
          </motion.h1>
        </motion.div>
        <About
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.article variants={textAnimate}>
            <h2>Who We Are</h2>
            <p>
              Bunda Solutions is more than just a platform; it's a community of
              passionate individuals dedicated to fostering innovation and
              nurturing the entrepreneurial spirit. Our team is comprised of
              seasoned professionals who understand the challenges entrepreneurs
              face when trying to secure the funding needed to turn their ideas
              into reality. With years of experience in various industries, we
              are committed to empowering the next generation of visionaries.
            </p>
          </motion.article>
          <motion.div variants={textAnimate} className="line"></motion.div>
          <motion.article variants={textAnimate}>
            <h2>What We Do</h2>
            <p>
              At Bunda Solutions, we simplify the complex process of securing
              capital for your business. We recognize that even the most
              brilliant ideas can remain dormant without the necessary financial
              backing. Our platform is designed to bridge this gap, providing
              you with a straightforward path to connect with potential
              investors and experts who share your enthusiasm for your project.
            </p>
          </motion.article>
        </About>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 50vh;
  background: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
`;

const Container = styled.div`
  width: 88%;
  margin: 0 auto;
  padding: 3rem 0;
  .head {
    text-align: center;
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    .head {
      font-size: 2rem;
    }
  }
`;

const About = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  article {
    width: 45%;
    h2 {
      color: ${(props) => props.theme.text1};
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    p {
      line-height: 2rem;
      font-size: 1.1rem;
      color: ${(props) => props.theme.text2};
    }
  }
  .line {
    margin-top: 4rem;
    height: 5rem;
    width: 1px;
    background-color: ${(props) => props.theme.line};
  }

  @media screen and (max-width: 40rem) {
    flex-direction: column;
    gap: 1.5rem;
    article {
      width: 100%;
      h2 {
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .line {
      display: none;
    }
  }
`;

export default EAbout;
