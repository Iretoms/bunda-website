import styled from "styled-components";
import { motion } from "framer-motion";
import heroImage from "../assets/svg/heroImage.svg";

const BHero = () => {
  return (
    <Section>
      <Container>
        <Text>
          <h1 className="hero_title">
            Brand Management, Media Buying, Talent Booking and so much more.
          </h1>
          <p className="hero_subtitle">
            Bunda is a foremost management consultancy specializing event
            management and activations, brand management and production.
          </p>
          <div className="hero_cta--container">
            <a href="#contact" className="hero_cta--button">
              Contact Us
            </a>
          </div>
        </Text>
        <Image>
          <img src={heroImage} alt="hero" className="hero_image" />
        </Image>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 88vh;
  display: flex;
  align-items: center;
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
`;

const Text = styled(motion.article)`
  .hero_title {
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
      padding: 1.2rem 2.3rem;
      border: none;
      border-radius: 3px;
      color: #fff;
      transition: all 0.2s ease-in;
      &:hover {
        color: ${(props) => props.theme.text2};
        background-color: transparent;
        border: 2px solid ${(props) => props.theme.blue};
      }
    }
  }
`;

const Image = styled(motion.article)`
  .hero_image {
    transform: scale(1.6);
  }
`;

export default BHero;
