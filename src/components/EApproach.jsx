import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import approach from "../assets/png/approach.png";

const EApproach = () => {
  return (
    <Section>
      <div className="container">
        <Image>
          <img src={approach} alt="approachImage" />
        </Image>
        <Text>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.h1 variants={textAnimate}>Our Unique Approach</motion.h1>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.p variants={textAnimate}>
              <span>Streamlined Application Process: </span>We've removed the
              barriers that often deter entrepreneurs from pursuing their
              dreams. To get started, all you need to do is create a captivating
              cover letter or a persuasive pitch deck outlining your business
              concept.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.p variants={textAnimate}>
              <span>Access to a Network of Experts: </span>We've cultivated a
              diverse network of experts, professionals, and angel investors who
              are eager to discover and support the next big thing. Your ideas
              will be presented to this select group, giving you the opportunity
              to receive invaluable feedback and, potentially, funding.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.p variants={textAnimate}>
              <span>Seed Funding Opportunities: </span>Successful candidates
              will gain access to the capital they need to kickstart their
              ventures. With the potential to receive up to $30,000 in seed
              funding, you can transform your innovative concept into a thriving
              business.
            </motion.p>
          </motion.div>
        </Text>
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
      flex-direction: column-reverse;
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

export default EApproach;
