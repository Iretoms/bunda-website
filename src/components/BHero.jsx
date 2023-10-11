import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";
import heroImage from "../assets/svg/heroImage.svg";

const BHero = () => {
  const location = useLocation();
  return (
    <Section>
      <Container>
        <Text
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="hero_title">
            {location.pathname === "/brand"
              ? "Brand Management, Media Buying, Talent Booking and so much more."
              : "Digital Marketing, Design, Web and Mobile Development Services."}
          </motion.h1>
          <motion.p variants={textAnimate} className="hero_subtitle">
            {location.pathname === "/brand"
              ? "Bunda is a foremost management consultancy specializing event management and activations, brand management and production."
              : "Bundakten, The place where your exploration ends and expertise begins."}
          </motion.p>
          <motion.div variants={textAnimate} className="hero_cta--container">
            <motion.a href="#contact" className="hero_cta--button">
              Contact Us
            </motion.a>
          </motion.div>
        </Text>
        <Image
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.img
            variants={imageAnimate}
            src={heroImage}
            alt="hero"
            className="hero_image"
          />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background-color: ${(props) => props.theme.primaryBg};
  width: 100%;
  min-height: 88vh;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-out;
`;

const Container = styled(motion.div)`
  width: 87%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4%;
  article {
    width: 45%;
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    flex-direction: column;
    gap: 5rem;
    article {
      width: 100%;
    }
  }
`;

const Text = styled(motion.article)`
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
  }
  .hero_cta--container {
    padding-top: 3rem;
    .hero_cta--button {
      font-size: 1.1rem;
      font-weight: 500;
      background-color: ${(props) => props.theme.blue};
      padding: 1rem 2.1rem;
      border: none;
      border-radius: 10px;
      color: #fff;
    }
  }

  @media screen and (max-width: 40rem) {
    text-align: center;
    .hero_title {
      font-size: 2rem;
    }
    .hero_subtitle {
      font-size: 1rem;
    }
  }
`;

const Image = styled(motion.article)`
  .hero_image {
    transform: scale(1.6);
  }

  @media screen and (max-width: 40rem) {
    overflow: hidden;
    width: 12rem;
    height: 20rem;
    .hero_image {
      width: 100%;
      height: 100%;
    }
  }
`;

export default BHero;
