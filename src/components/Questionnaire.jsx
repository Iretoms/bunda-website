import styled from "styled-components";
import MultiStepForm from "./MultiStepForm";

const Questionnaire = () => {
    return (
        <Section>
            <div className="container">
                <MultiStepForm/>
            </div>
        </Section>
    );
};

const Section = styled.section`
  background-color: ${(props) => props.theme.primaryBg};
  width: 100%;
  min-height: 40vh;
  transition: background-color 0.3s ease-out;
  .container {
    width: 88%;
    margin: 0 auto;
    padding: 3rem 0;
  }
`;

export default Questionnaire;