import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";
import { toast } from "react-toastify";

const MultiStepForm = () => {
  const totalSteps = 36;
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const isLastStep = step === totalSteps;

  useEffect(() => {
    const newProgress = (step / totalSteps) * 100;
    setProgress(newProgress);
  }, [step]);

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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    console.log("file submitted", file);
    toast.success("Submitted successfully");
    setStep(1);
    setFormData({});
    setFile(null);
  };
  return (
    <Container>
      <ProgressBarContainer>
        <ProgressBar progress={progress}></ProgressBar>
      </ProgressBarContainer>
      <motion.h1 variants={textAnimate} initial="hide" animate={"show"}>
        {step > 6 ? "Business Information" : "Personal Information"}
      </motion.h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="name">
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            <label htmlFor="email">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
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
            <label htmlFor="phone">
              Phone Number <span>*</span>
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
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
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            <textarea
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 5 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="dob">
              Date of Birth <span>*</span>
            </label>
            <input
              type="text"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="dd/mm/yy"
              required
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
            <label htmlFor="educationalBackground">
              Educational Background <span>*</span>
            </label>
            <textarea
              id="educationalBackground"
              value={formData.educationalBackground}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 7 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessName">
              Business Name <span>*</span>
            </label>
            <input
              type="text"
              id="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
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
            <label htmlFor="businessAddress">
              Business Address <span>*</span>
            </label>
            <textarea
              id="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 9 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessPhone">
              Business Phone Number <span>*</span>
            </label>
            <input
              type="text"
              id="businessPhone"
              value={formData.businessPhone}
              onChange={handleChange}
              required
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
            <label htmlFor="businessMail">
              Business Email <span>*</span>
            </label>
            <input
              type="email"
              id="businessMail"
              value={formData.businessMail}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 11 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="website">Website (if applicable)</label>
            <input
              type="text"
              id="website"
              value={formData.website}
              onChange={handleChange}
            />
          </motion.div>
        )}
        {step === 12 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessNature">
              What is the nature of your business? <span>*</span>
            </label>
            <textarea
              id="businessNature"
              value={formData.businessNature}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 13 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessProducts">
              What products or services do you offer? <span>*</span>
            </label>
            <textarea
              id="businessProducts"
              value={formData.businessProducts}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 14 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="usp">
              What is your unique selling proposition (USP) <span>*</span>
            </label>
            <textarea
              id="usp"
              value={formData.usp}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 15 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="targetMarket">
              What is your target market or audience? <span>*</span>
            </label>
            <textarea
              id="targetMarket"
              value={formData.targetMarket}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 16 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessGoal">
              What are your short-term and long-term business goals?{" "}
              <span>*</span>
            </label>
            <textarea
              id="businessGoal"
              value={formData.businessGoal}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 17 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessPlan">
              How do you plan to achieve these goals? <span>*</span>
            </label>
            <textarea
              id="businessPlan"
              value={formData.businessPlan}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 18 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="businessChallenges">
              What challenges do you foresee in reaching your goals?{" "}
              <span>*</span>
            </label>
            <textarea
              id="businessChallenges"
              value={formData.businessChallenges}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 19 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="marketResearch">
              Have you conducted market research? If so, please provide key
              findings <span>*</span>
            </label>
            <textarea
              id="marketResearch"
              value={formData.marketResearch}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 20 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="mainCompetitors">
              Who are your main competitors? <span>*</span>
            </label>
            <textarea
              id="mainCompetitors"
              value={formData.mainCompetitors}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 21 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="competitionStrategies">
              What strategies do you plan to use to stay competitive in your
              industry? <span>*</span>
            </label>
            <textarea
              id="competitionStrategies"
              value={formData.competitionStrategies}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 22 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="financialStatus">
              What is your current financial status (revenue, expenses,
              profit/loss)? <span>*</span>
            </label>
            <textarea
              id="financialStatus"
              value={formData.financialStatus}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 23 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="funding">
              How much funding are you seeking? <span>*</span>
            </label>
            <input
              type="text"
              id="funding"
              value={formData.funding}
              onChange={handleChange}
              required
            />
          </motion.div>
        )}
        {step === 24 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="useFunds">
              How do you plan to use the funds if granted? <span>*</span>
            </label>
            <textarea
              id="useFunds"
              value={formData.useFunds}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 25 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label>
              Do you have a detailed business plan? if yes, please attach it{" "}
              <span>*</span>
            </label>
            <input
              type="file"
              accept=".doc, .docx"
              onChange={handleFileChange}
            />
          </motion.div>
        )}
        {step === 26 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="profitabilityTimeline">
              What is your timeline for achieving profitability? <span>*</span>
            </label>
            <textarea
              id="profitabilityTimeline"
              value={formData.profitabilityTimeline}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 27 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="marketProducts">
              How do you plan to market your products or services?{" "}
              <span>*</span>
            </label>
            <textarea
              id="marketProducts"
              value={formData.marketProducts}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 28 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="pricingStrategy">
              What is your pricing strategy? <span>*</span>
            </label>
            <textarea
              id="pricingStrategy"
              value={formData.pricingStrategy}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 29 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="keyMembers">
              Who are the key members of your team, and what are their roles?{" "}
              <span>*</span>
            </label>
            <textarea
              id="keyMembers"
              value={formData.keyMembers}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 30 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="relevantExperience">
              What relevant experience and skills do you and your team possess?{" "}
              <span>*</span>
            </label>
            <textarea
              id="relevantExperience"
              value={formData.relevantExperience}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 31 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="addressSkillGap">
              How do you plan to address any skill gaps in your team?{" "}
              <span>*</span>
            </label>
            <textarea
              id="addressSkillGap"
              value={formData.addressSkillGap}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 32 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="legalConsiderations">
              Are there any legal or regulatory considerations specific to your
              business? <span>*</span>
            </label>
            <textarea
              id="legalConsiderations"
              value={formData.legalConsiderations}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 33 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="necessaryLicenses">
              Do you have the necessary licenses and permits? <span>*</span>
            </label>
            <textarea
              id="necessaryLicenses"
              value={formData.necessaryLicenses}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 34 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="socialImpactGoals">
              Does your business have any social or environmental impact goals?{" "}
              <span>*</span>
            </label>
            <textarea
              id="socialImpactGoals"
              value={formData.socialImpactGoals}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 35 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="impactMeasurePlan">
              How do you plan to measure and report on your impact?{" "}
              <span>*</span>
            </label>
            <textarea
              id="impactMeasurePlan"
              value={formData.impactMeasurePlan}
              onChange={handleChange}
              required
            ></textarea>
          </motion.div>
        )}
        {step === 36 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="additionalInfo">
              Is there any additional information or context you would like to
              provide about your business or proposal? <span>*</span>
            </label>
            <textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              required
            ></textarea>
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
            <button type="button" onClick={handleNext}>
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
        span {
          color: red;
        }
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
      textarea {
        resize: none;
        color: ${(props) => props.theme.text3};
        font-family: inherit;
        font-size: 1.1rem;
        padding: 1rem 0;
        min-height: 2.5rem;
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
          background-color: #ccc;
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

const ProgressBarContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  background-color: #ccc;
`;

const ProgressBar = styled.div`
  height: 6px;
  background-color: ${(props) => props.theme.blue};
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease;
`;

export default MultiStepForm;
