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
            <label htmlFor="DoB">
              Date of Birth <span>*</span>
            </label>
            <input
              type="text"
              id="DoB"
              value={formData.DoB}
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
            <label htmlFor="EducationalBackground">
              Educational Background <span>*</span>
            </label>
            <textarea
              id="EducationalBackground"
              value={formData.EducationalBackground}
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
            <label htmlFor="BusinessName">
              Business Name <span>*</span>
            </label>
            <input
              type="text"
              id="BusinessName"
              value={formData.BusinessName}
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
            <label htmlFor="BusinessAddress">
              Business Address <span>*</span>
            </label>
            <textarea
              id="BusinessAddress"
              value={formData.BusinessAddress}
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
            <label htmlFor="BusinessPhone">
              Business Phone Number <span>*</span>
            </label>
            <input
              type="text"
              id="BusinessPhone"
              value={formData.BusinessPhone}
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
            <label htmlFor="BusinessMail">
              Business Email <span>*</span>
            </label>
            <input
              type="email"
              id="BusinessMail"
              value={formData.BusinessMail}
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
            <label htmlFor="BusinessNature">
              What is the nature of your business? <span>*</span>
            </label>
            <textarea
              id="BusinessNature"
              value={formData.BusinessNature}
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
            <label htmlFor="BusinessProducts">
              What products or services do you offer? <span>*</span>
            </label>
            <textarea
              id="BusinessProducts"
              value={formData.BusinessProducts}
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
            <label htmlFor="USP">
              What is your unique selling proposition (USP) <span>*</span>
            </label>
            <textarea
              id="USP"
              value={formData.USP}
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
            <label htmlFor="TargetMarket">
              What is your target market or audience? <span>*</span>
            </label>
            <textarea
              id="TargetMarket"
              value={formData.TargetMarket}
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
            <label htmlFor="BusinessGoal">
              What are your short-term and long-term business goals?{" "}
              <span>*</span>
            </label>
            <textarea
              id="BusinessGoal"
              value={formData.BusinessGoal}
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
            <label htmlFor="BusinessPlan">
              How do you plan to achieve these goals? <span>*</span>
            </label>
            <textarea
              id="BusinessPlan"
              value={formData.BusinessPlan}
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
            <label htmlFor="BusinessChallenges">
              What challenges do you foresee in reaching your goals?{" "}
              <span>*</span>
            </label>
            <textarea
              id="BusinessChallenges"
              value={formData.BusinessChallenges}
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
            <label htmlFor="MarketResearch">
              Have you conducted market research? If so, please provide key
              findings <span>*</span>
            </label>
            <textarea
              id="MarketResearch"
              value={formData.MarketResearch}
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
            <label htmlFor="MainCompetitors">
              Who are your main competitors? <span>*</span>
            </label>
            <textarea
              id="MainCompetitors"
              value={formData.MainCompetitors}
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
            <label htmlFor="CompetitionStrategies">
              What strategies do you plan to use to stay competitive in your
              industry? <span>*</span>
            </label>
            <textarea
              id="CompetitionStrategies"
              value={formData.CompetitionStrategies}
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
            <label htmlFor="FinancialStatus">
              What is your current financial status (revenue, expenses,
              profit/loss)? <span>*</span>
            </label>
            <textarea
              id="FinancialStatus"
              value={formData.FinancialStatus}
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
            <label htmlFor="Funding">
              How much funding are you seeking? <span>*</span>
            </label>
            <input
              type="text"
              id="Funding"
              value={formData.Funding}
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
            <label htmlFor="UseFunds">
              How do you plan to use the funds if granted? <span>*</span>
            </label>
            <textarea
              id="UseFunds"
              value={formData.UseFunds}
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
            <label htmlFor="CompetitionStrategies">
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
            <label htmlFor="ProfitabilityTimeline">
              What is your timeline for achieving profitability? <span>*</span>
            </label>
            <textarea
              id="ProfitabilityTimeline"
              value={formData.ProfitabilityTimeline}
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
            <label htmlFor="MarketProducts">
              How do you plan to market your products or services?{" "}
              <span>*</span>
            </label>
            <textarea
              id="MarketProducts"
              value={formData.MarketProducts}
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
            <label htmlFor="PricingStrategy">
              What is your pricing strategy? <span>*</span>
            </label>
            <textarea
              id="PricingStrategy"
              value={formData.PricingStrategy}
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
            <label htmlFor="KeyMembers">
              Who are the key members of your team, and what are their roles?{" "}
              <span>*</span>
            </label>
            <textarea
              id="KeyMembers"
              value={formData.KeyMembers}
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
            <label htmlFor="RelevantExperience">
              What relevant experience and skills do you and your team possess?{" "}
              <span>*</span>
            </label>
            <textarea
              id="RelevantExperience"
              value={formData.RelevantExperience}
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
            <label htmlFor="AddressSkillGap">
              How do you plan to address any skill gaps in your team?{" "}
              <span>*</span>
            </label>
            <textarea
              id="AddressSkillGap"
              value={formData.AddressSkillGap}
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
            <label htmlFor="LegalConsiderations">
              Are there any legal or regulatory considerations specific to your
              business? <span>*</span>
            </label>
            <textarea
              id="LegalConsiderations"
              value={formData.LegalConsiderations}
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
            <label htmlFor="NecessaryLicenses">
              Do you have the necessary licenses and permits? <span>*</span>
            </label>
            <textarea
              id="NecessaryLicenses"
              value={formData.NecessaryLicenses}
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
            <label htmlFor="SocialImpactGoals">
              Does your business have any social or environmental impact goals?{" "}
              <span>*</span>
            </label>
            <textarea
              id="SocialImpactGoals"
              value={formData.SocialImpactGoals}
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
            <label htmlFor="ImpactMeasurePlan">
              How do you plan to measure and report on your impact?{" "}
              <span>*</span>
            </label>
            <textarea
              id="ImpactMeasurePlan"
              value={formData.ImpactMeasurePlan}
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
            <label htmlFor="AdditionalInfo">
              Is there any additional information or context you would like to
              provide about your business or proposal? <span>*</span>
            </label>
            <textarea
              id="AdditionalInfo"
              value={formData.AdditionalInfo}
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
