import styled from "styled-components";
import { motion } from "framer-motion";


const ContactUs = () => {
    return (
      <Section id="contact">
        <Container>
          <div>
            <h1 className="head">Contact Us</h1>
          </div>
          <FormContainer>
            <form>
              <div className="form-control name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="form-control email">
                <label htmlFor="email">Email</label>
                <input type="email" name="name" />
              </div>
              <div className="form-control message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </FormContainer>
        </Container>
      </Section>
    );
};

const Section = styled.section`
  width: 100%;
  min-height: 88vh;
  background-color: ${(props) => props.theme.primaryBg};
  transition: background-color 0.3s ease-out;
`;

const Container = styled.div`
  width: 87%;
  margin: 0 auto;
  padding: 2rem 0;
  .head {
    text-align: center;
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    padding-bottom: 3rem;
  }
`;

const FormContainer = styled(motion.article)`
  width: 70%;
  margin: 0 auto;
  form {
    width: 100%;
    .form-control {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1rem;
      label {
        font-size: 1.1rem;
        font-weight: bold;
        color: ${(props) => props.theme.text2};
      }
      input,
      textarea {
        resize: none;
        padding: 0.5rem;
        width: 100%;
        border: ${(props) => props.theme.FB};
        border-radius: 5px;
        font-size: 1rem;
        font-family: inherit;
        color: ${(props) => props.theme.text3};
        background-color: transparent;
        &:focus {
          outline: none;
        }
      }
    }

    .name,
    .email {
      input {
        height: 3rem;
      }
    }

     button {
        margin-top: 1rem;
        cursor: pointer;
        font-size: 1rem;
        font-family: inherit;
        border: none;
        border-radius: 10px;
        background-color: ${props => props.theme.blue};
        color: #fff;
        padding: 1rem 2.5rem;
     }
  }
`;

export default ContactUs;