import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import advertising from "../assets/png/advertising.png"
import consulting from "../assets/png/consulting.png"
import handshake from "../assets/png/handshake.png";

const BAboutUs = () => {
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
                Welcome to Bunda. Bunda is a foremost management consultancy
                specializing in media buying, talent booking, public relations
                and celebrity endorsement, event management and activations,
                brand management, and production.
              </p>
            </motion.article>
            <motion.div variants={textAnimate} className="line"></motion.div>
            <motion.article variants={textAnimate}>
              <h2>What We Offer</h2>
              <p>
                Bunda plays vital roles in responding to market stimulus and
                complete understanding of our client needs, preparing for events
                or promotions in a budget-friendly, timely way with flawless
                activation. We are committed to excellence and integrity in
                everything, which makes us stand out from the crowd and results
                in our highly commendable success rate.
              </p>
            </motion.article>
          </About>
          <Cards>
            <motion.div
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Card variants={textAnimate}>
                <div className="advertising">
                  <img src={advertising} alt="advertising" />
                </div>
                <h3>Media Advertising</h3>
                <p>
                  A part of our core value is to create the best possible image
                  and positioning for our many clients. Hence, we have invested
                  notable efforts in establishing relationships across media
                  houses in Nigeria, key brand promoters worldwide, and academic
                  experts who provide us with up-to-date developments and
                  research.
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
                <div className="consult">
                  <img src={consulting} alt="consultancy" />
                </div>
                <h3>Consultancy</h3>
                <p>
                  Our Consulting services focuses on our client's most critical
                  issues and opportunities: strategy, marketing, operations,
                  technology, transformation, advanced digital analytics,
                  corporate finance, mergers & acquisitions, and sustainability
                  across industries and countries.
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
                <div className="public">
                  <img src={handshake} alt="public" />
                </div>
                <h3>Public Relations Services</h3>
                <p>
                  At Bunda, we attract, onboard, maintain, motivate, and retain
                  top-performing talents across boards. Public relations, to us,
                  means improving business performance through practices that
                  make our partners, talents, and employees productive.
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
      font-size: 1.1rem;
      color: ${(props) => props.theme.text2};
    }
  }
  .line {
    margin-top: 2.5rem;
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
  width: 20rem;
  height: 21rem;
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
  .advertising {
    background-color: rgba(19, 118, 119, 0.2);
  }
  .consult {
    background-color: rgba(11, 104, 191, 0.2);
  }
  .public {
    background-color: rgba(227, 142, 49, 0.2);
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

export default BAboutUs;