import { useRef } from "react";
// import emailjs from "emailjs-com";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";

const ContactUs = () => {
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.h1 variants={textAnimate} className="head">
            Contact Us
          </motion.h1>
        </motion.div>
        <FormContainer
          initial="hide"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.form variants={textAnimate} onSubmit={onSubmit} ref={formRef}>
            <div className="form-control name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-control email">
              <label htmlFor="email">Email</label>
              <input type="email" name="name" required />
            </div>
            <div className="form-control message">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </motion.form>
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
  padding: 2rem 0 4rem;
  .head {
    text-align: center;
    color: ${(props) => props.theme.text1};
    font-weight: bold;
    line-height: 2.7rem;
    font-size: 2.3rem;
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    .head {
      font-size: 2rem;
    }
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
          border-color: ${(props) => props.theme.blue};
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
      background-color: ${(props) => props.theme.blue};
      color: #fff;
      padding: 1rem 2.5rem;
    }
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
  }
`;

export default ContactUs;
