import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const isLastStep = step === 10;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  return (
    <Container>
      <motion.h1 variants={textAnimate} initial="hide" animate={"show"}>
        {step > 5 ? "Business Information" : "Personal Information"}
      </motion.h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Address</label>
            <input
              type="text"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 5 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Date of Birth</label>
            <input
              type="text"
              id="DoB"
              value={formData.DoB}
              onChange={handleChange}
              placeholder="dd/mm/yy"
            />
          </motion.div>
        )}
        {step === 6 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Business Name</label>
            <input
              type="text"
              id="BusinessName"
              value={formData.BusinessName}
              onChange={handleChange}
              usinessAddress
            />
          </motion.div>
        )}
        {step === 7 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Business Address</label>
            <input
              type="text"
              id="BusinessAddress"
              value={formData.BusinessAddress}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 8 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Business Phone Number</label>
            <input
              type="text"
              id="BusinessPhone"
              value={formData.BusinessPhone}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 9 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Business Email</label>
            <input
              type="text"
              id="BusinessMail"
              value={formData.BusinessMail}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 10 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">Website (if applicable)</label>
            <input
              type="text"
              id="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="dd/mm/yy"
            />
          </motion.div>
        )}

        {isLastStep ? (
          <div className="buttonContainer">
            <button type="button" onClick={handlePrev} disabled={step === 1}>
              Prev
            </button>
            <button type="submit">Submit</button>
          </div>
        ) : (
          <div className="buttonContainer">
            <button type="button" onClick={handlePrev} disabled={step === 1}>
              Prev
            </button>
            <button type="button" onClick={handleNext} disabled={step === 10}>
              Next
            </button>
          </div>
        )}
      </form>
    </Container>
  );
};

const Container = styled.article`
  width: 60%;
  margin: 0 auto;
  h1 {
    color: ${(props) => props.theme.text1};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  form {
    width: 100%;
    .formControl {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 2rem;
      label {
        color: ${(props) => props.theme.text1};
        font-weight: bold;
      }
      input {
        color: ${(props) => props.theme.text3};
        font-family: inherit;
        font-size: 1.1rem;
        padding: 1rem 0;
        height: 2.5rem;
        border: none;
        border-bottom: ${(props) => props.theme.FB};
        background-color: transparent;
        &:focus {
          border-color: ${(props) => props.theme.blue};
          outline: none;
        }
      }
    }
    .buttonContainer {
      display: flex;
      gap: 1rem;
      button {
        cursor: pointer;
        width: 4rem;
        height: 2.5rem;
        border: none;
        border-radius: 3px;
        background-color: ${(props) => props.theme.blue};
        color: #fff;
        font-family: inherit;
        font-size: 1rem;
        &:active {
          transform: scale(0.98);
        }
        &:disabled {
          background-color: #cccccc;
        }
      }
    }
  }

  @media screen and (max-width: 40rem) {
    width: 90%;
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export default MultiStepForm;
