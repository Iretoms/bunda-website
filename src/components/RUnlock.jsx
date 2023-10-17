import styled from "styled-components";
// import { motion } from "framer-motion";
// import { textAnimate } from "../animation";

const RUnlock = () => {
  return (
    <Section>
      <div className="container">
        <h1>Unlock Your Full Potential</h1>
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
    padding: 5rem 0;
  }
`;

export default RUnlock;
