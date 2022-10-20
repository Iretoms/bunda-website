import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import MeaSite from "../assets/png/MeaSite.png"
import betaplaceSite from "../assets/png/betaplaceSite.PNG"
import qonveySite from "../assets/png/qonveySite.PNG";


const Works = () => {
    return (
      <Section>
        <Container>
          <motion.div
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate} className="head">
              Our Works
            </motion.h1>
          </motion.div>
          <article className="cards">
            <motion.div
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Card variants={textAnimate}>
                <div>
                  <img src={qonveySite} alt="qonvey" />
                </div>
                <h3>Qonvey</h3>
                <p>
                  Qonvey is a modernized delivery platform that manages
                  deliveries for business organizations and individual clients.
                </p>
                <a
                  href="https://qonvey.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Card>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Card variants={textAnimate}>
                <div>
                  <img src={betaplaceSite} alt="betaplace" />
                </div>
                <h3>My Beta Place</h3>
                <p>A plattform where you can find Apartments Quick and Easy.</p>
                <a
                  href="https://mybetaplace.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Card>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <Card variants={textAnimate}>
                <div>
                  <img src={MeaSite} alt="mea" />
                </div>
                <h3>MAE Management Consultancy Group</h3>
                <p>Amplify the artist. Magnify the sound.</p>
                <a
                  href="https://mae-mcg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Card>
            </motion.div>
          </article>
        </Container>
      </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 70vh;
  padding: 3rem 0;
  background-color: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
`;

const Container = styled.div`
  width: 87%;
  margin: 0 auto;
  .head {
    text-align: center;
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    padding-bottom: 3rem;
  }

  .cards {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    div {
        width: 100%;
    }
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    .cards {
        flex-direction: column;
    }
  }
`;

const Card = styled(motion.div)`
  width: 31%;
  min-height: 22rem;
  padding: 1.5rem;
  border: ${(props) => props.theme.BB};
  border-radius: 10px;
  div {
    width: 100%;
    height: 8rem;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    margin-bottom: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: transform 0.3s linear;
    }
  }

  h3 {
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.text1};
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme.text2};
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    color: #fff;
    background-color: ${(props) => props.theme.blue};
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
  }

  &:hover {
    div {
      img {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
  }
`;

export default Works;