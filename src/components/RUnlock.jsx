import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { textAnimate } from "../animation";
import MultiStepForm from "./MultiStepForm";

const RUnlock = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const onLogOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };
  return (
    <Section>
      <div className="container">
        <Text
          initial="hide"
          animate={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div variants={textAnimate} className="head">
            <h1>Unlock Your Full Potential</h1>
            <button onClick={onLogOut}>Sign Out</button>
          </motion.div>
        </Text>
        <MultiStepForm/>
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
    padding: 3rem 0;
  }
`;

const Text = styled(motion.article)`
  margin-bottom: 4rem;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme.text1};
    }
    button {
      cursor: pointer;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      background-color: ${(props) => props.theme.blue};
      padding: 1rem 2rem;
      border: none;
      border-radius: 10px;
      color: #fff;
    }
  }

  @media screen and (max-width: 40rem) {
   .head {
    flex-direction: column-reverse;
    gap: 1rem;
    h1 {
      font-size: 1.7rem;
    }
   }
  }
`;

export default RUnlock;
