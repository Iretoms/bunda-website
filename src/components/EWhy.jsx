import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import why from "../assets/png/why.png";

const EWhy = () => {
  return (
    <Section>
      <div className="container">
        <Text>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h1 variants={textAnimate}>Why We Do It</motion.h1>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.p variants={textAnimate}>
              In today's world, accessing corporate loans and traditional
              funding sources can be a daunting and uncertain process, even for
              those with the most groundbreaking ideas. We believe that
              innovation should know no boundaries. Your living room or garage
              should be the birthplace of the next industry-disrupting invention
              or groundbreaking service.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.p variants={textAnimate}>
              We are driven by the belief that everyone, regardless of their
              background or resources, should have the opportunity to bring
              their ideas to life. By connecting you with experts and investors
              who understand your vision, we aim to make entrepreneurship more
              accessible and equitable. At Bunda Funding Solutions, we are
              committed to leveling the playing field, giving every brilliant
              idea the chance to flourish, and making a lasting impact on the
              world.
            </motion.p>
          </motion.div>
        </Text>
        <Image>
          <img src={why} alt="whyImage" />
        </Image>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  background: ${(props) => props.theme.primaryBg};
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

const Image = styled(motion.article)`
  height: 25rem;
  overflow: hidden;
  border-radius: 10px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Text = styled(motion.article)`
  h1 {
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 2rem;
    color: ${(props) => props.theme.text2};
    span {
      color: ${(props) => props.theme.text1};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 40rem) {
    text-align: center;
    h1 {
      font-size: 2rem;
    }
  }
`;

export default EWhy;
