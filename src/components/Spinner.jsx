import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <Section>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#2d3161"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Section>
  );
};

const Section = styled.section`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
