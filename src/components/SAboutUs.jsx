import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import digitalMarketing from "../assets/png/digitalMarketing.png";
import webDev from "../assets/png/webDev.png";
import design from "../assets/png/design.png";

const SAboutUs = () => {
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
          <motion.p variants={textAnimate} className="subhead">
            Bundakten offers Digital Marketing, Design, Web and Mobile
            Development services for all types of companies and business. our
            professional team utilizes the latest advance technology in digital
            solutions. The goal remains to help your business grow through an
            effective, and affordable digital solution. Here at Bundakten, the
            sky is not the limit, contact us let's take you far beyond.
          </motion.p>
        </motion.div>
        <Cards>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <Card variants={textAnimate}>
              <div className="digitalMarketing">
                <img src={digitalMarketing} alt="digitalMarketing" />
              </div>
              <h3>Digital Marketing services</h3>
              <p>
                At Bundakten, we offer data-driven and return on investment
                digital marketing services. Our professional digital marketers
                take a customer-oriented approach to help your business reach
                its true potential. We understand and translate your business
                goals into marketing strategies and optimizing campaigns.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <Card variants={textAnimate}>
              <div className="webDev">
                <img src={webDev} alt="webDev" />
              </div>
              <h3>Web and Mobile Development</h3>
              <p>
                At Bundakten, our in-house team of experienced web and mobile
                developers produces applications that help you meet the needs of
                your business. We create a platform that achieves success for
                your business. We deliver services that exceed the high
                standards demanded across strategic, compliance, security, and
                performance.
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <Card variants={textAnimate}>
              <div className="design">
                <img src={design} alt="design" />
              </div>
              <h3>UI/UX & Graphic Design</h3>
              <p>
                We are an agency that specializes in designing websites and
                mobile apps that automatically attracts the target audience of
                your business. We are known for serving businesses with
                user-centric design with a combination of simplified and
                enticing visuals that not only look good but are easy too use
                for both you and your website visitors.
              </p>
            </Card>
          </motion.div>
        </Cards>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
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
    padding-bottom: 2rem;
  }

  .subhead {
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme.text2};
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    .head {
      font-size: 2rem;
    }

    .subhead {
      font-size: 1rem;
    }
  }
`;

const Cards = styled(motion.div)`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and (max-width: 40rem) {
    flex-direction: column;
  }
`;

const Card = styled(motion.article)`
  width: 21rem;
  min-height: 22rem;
  padding: 1.5rem;
  border: ${(props) => props.theme.BB};
  border-radius: 10px;
  div {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 10px;
    padding: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .digitalMarketing {
    background-color: rgba(11, 104, 191, 0.2);
  }
  .webDev {
    background-color: rgba(227, 142, 49, 0.2);
  }
  .design {
    background-color: rgba(19, 118, 119, 0.2);
  }

  h3 {
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.text1};
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme.text2};
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
  }
`;

export default SAboutUs;
