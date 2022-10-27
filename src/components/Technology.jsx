import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";

const Technology = ({ image, caption }) => {
  return (
    <Figure variants={textAnimate}>
      <img src={image} alt={caption} />
      <figcaption>{caption}</figcaption>
    </Figure>
  );
};

const Figure = styled(motion.figure)`
  width: 7rem;
  text-align: center;
  img {
    width: 100%;
    height: 4rem;
    transform: scale(1);
    transition: transform 0.3s linear;
  }

  figcaption {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.text3};
    font-weight: 500;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

export default Technology;
