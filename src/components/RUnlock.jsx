import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import unlock from "../assets/png/unlock.png";
import { textAnimate } from "../animation";

const RUnlock = () => {
  return (
    <Section>
      <div className="container">
        <Text
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h1 variants={textAnimate}>
            Unlock your Full Potentials
          </motion.h1>
          <motion.p variants={textAnimate}>
            Ready to take the first step towards realizing your business dreams?
            Share your vision in the questionnaire below
          </motion.p>
          <motion.div variants={textAnimate}>
            <Link to="/access-training">Access Training</Link>
          </motion.div>
        </Text>
        <Image>
          <img src={unlock} alt="unlock" />
        </Image>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  background-color: ${(props) => props.theme.primaryBg};
  width: 100%;
  min-height: 80vh;
  transition: background-color 0.3s ease-out;
  .container {
    width: 88%;
    margin: 0 auto;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    gap: 4rem;
    article {
      width: 50%;
    }
  }

  @media screen and (max-width: 40rem) {
    .container {
      padding-top: 3rem;
      flex-direction: column;
      gap: 3rem;
      article {
        width: 100%;
      }
    }
  }
`;

const Text = styled(motion.article)`
  h1 {
    line-height: 2.7rem;
    font-weight: bold;
    font-size: 2.3rem;
    color: ${(props) => props.theme.text1};
    margin-bottom: 1.5rem;
  }
  p {
    color: ${(props) => props.theme.text2};
    font-size: 1.2rem;
    font-weight: bold;
  }
  div {
    margin-top: 3rem;
    a {
      cursor: pointer;
      font-family: inherit;
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
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Image = styled.article`
  height: 25rem;
  overflow: hidden;
  border-radius: 10px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default RUnlock;
