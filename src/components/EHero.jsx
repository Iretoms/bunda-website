import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import introVideo from "../assets/mp4/introVideo.mp4";
import placeholderPic from "../assets/png/placeholderPic.png";

const EHero = () => {
  return (
    <Section>
      <div className="container">
        <Text
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="hero_title">
            Welcome to your Entrepreneurial <br />
            Journey!
          </motion.h1>
          <motion.p variants={textAnimate} className="hero_subtitle">
            Are you ready to embark on a transformative entrepreneurial
            adventure? Our introductory video will give you a glimspe of what
            awaits you on this exciting journey.
          </motion.p>
        </Text>
        <StyledVideo>
          <Video poster={placeholderPic} controls={["PlayPause"]}>
            <source src={introVideo} type="video/mp4" />
          </Video>
        </StyledVideo>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  background-color: ${(props) => props.theme.primaryBg};
  width: 100%;
  min-height: 100vh;
  transition: background-color 0.3s ease-out;
  .container {
    width: 87%;
    margin: 0 auto;
    padding: 5rem 0;
  }

  @media screen and (max-width: 40rem) {
    min-height: 85vh;
    .container {
      padding: 3.5rem 0;
    }
  }
`;

const Text = styled(motion.article)`
  text-align: center;
  .hero_title {
    line-height: 2.7rem;
    font-weight: bold;
    font-size: 2.3rem;
    color: ${(props) => props.theme.text1};
    margin-bottom: 1.5rem;
  }
  .hero_subtitle {
    color: ${(props) => props.theme.text2};
    font-size: 1.2rem;
    font-weight: 500;
    width: 80%;
    margin: 0 auto 2rem;
    line-height: 2.4rem;
  }

  @media screen and (max-width: 40rem) {
    .hero_title {
      font-size: 2rem;
      line-height: 2rem;
    }
    .hero_subtitle {
      font-size: 1rem;
      width: 100%;
      line-height: 1.8rem;
    }
  }
`;

const StyledVideo = styled(motion.article)`
  width: 85%;
  margin: 0 auto;
  @media screen and (max-width: 40rem) {
    width: 98%;
  }
`;

export default EHero;
