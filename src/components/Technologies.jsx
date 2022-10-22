import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import Technology from "./Technology";
import adobeXd from "../assets/svg/adobeXd.svg"
import css from "../assets/svg/css.svg";
import devops from "../assets/svg/devops.svg";
import figma from "../assets/svg/figma.svg";
import html from "../assets/svg/html.svg";
import javascript from "../assets/svg/javascript.svg";
import nodejs from "../assets/svg/nodejs.svg";
import react from "../assets/svg/react.svg";
import sketch from "../assets/svg/sketch.svg";


const Technologies = () => {
    return (
      <Section>
        <Container>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate} className="head">Technologies</motion.h1>
          </motion.div>
          <div className="technologies">
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={adobeXd} caption="Adobe Xd" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={figma} caption="Figma" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={sketch} caption="Sketch" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={html} caption="HTML" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={css} caption="CSS" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={javascript} caption="Javascript" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={react} caption="ReactJs" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={nodejs} caption="NodeJs" />
            </motion.article>
            <motion.article
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Technology image={devops} caption="Devops" />
            </motion.article>
          </div>
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
  padding: 5rem 0;
  .head {
    text-align: center;
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    padding-bottom: 4rem;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    .head {
      font-size: 2rem;
    }

    .technologies {
        gap: 4rem;
        padding-left: 1.5rem;
    }
  }
`;

export default Technologies;