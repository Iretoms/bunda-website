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
              Bunda Solutions is a community of experienced professionals
              dedicated to supporting innovation and entrepreneurship. We
              understand the challenges entrepreneurs face in securing funding
              and are committed to empowering the next generation of
              visionaries.
            </p>
          </motion.article>
          <motion.div variants={textAnimate} className="line"></motion.div>
          <motion.article variants={textAnimate}>
            <h2>What We Do</h2>
            <p>
              Bunda Solutions simplifies the process of obtaining capital for
              your business, acknowledging that great ideas often need financial
              support to thrive. Our platform connects you with potential
              investors and experts who share your enthusiasm for your project,
              making the path to securing funding straightforward.
            </p>
          </motion.article>
        </About>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 60vh;
  background: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
`;

const Container = styled.div`
  width: 88%;
  margin: 0 auto;
  padding: 3rem 0 5rem;
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
      text-align: justify;
      text-justify: auto;
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
