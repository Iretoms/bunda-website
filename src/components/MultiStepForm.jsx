import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textAnimate } from "../animation";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const isLastStep = step === 37;

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
  };
  return (
    <Container>
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
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="phone">Phone Number</label>
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
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={formData.address}
              onChange={handleChange}
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
            <label htmlFor="DoB">Date of Birth</label>
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
            <label htmlFor="EducationalBackground">
              Educational Background
            </label>
            <textarea
              id="EducationalBackground"
              value={formData.EducationalBackground}
              onChange={handleChange}
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
            <label htmlFor="BusinessName">Business Name</label>
            <input
              type="text"
              id="BusinessName"
              value={formData.BusinessName}
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
            <label htmlFor="BusinessAddress">Business Address</label>
            <textarea
              id="BusinessAddress"
              value={formData.BusinessAddress}
              onChange={handleChange}
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
            <label htmlFor="BusinessPhone">Business Phone Number</label>
            <input
              type="text"
              id="BusinessPhone"
              value={formData.BusinessPhone}
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
            <label htmlFor="BusinessMail">Business Email</label>
            <input
              type="text"
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
              What is the nature of your business?
            </label>
            <textarea
              id="BusinessNature"
              value={formData.BusinessNature}
              onChange={handleChange}
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
              What products or services do you offer?
            </label>
            <textarea
              id="BusinessProducts"
              value={formData.BusinessProducts}
              onChange={handleChange}
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
              What is your unique selling proposition (USP)
            </label>
            <textarea
              id="USP"
              value={formData.USP}
              onChange={handleChange}
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
              What is your target market or audience?
            </label>
            <textarea
              id="TargetMarket"
              value={formData.TargetMarket}
              onChange={handleChange}
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
              What are your short-term and long-term business goals?
            </label>
            <textarea
              id="BusinessGoal"
              value={formData.BusinessGoal}
              onChange={handleChange}
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
              How do you plan to achieve these goals?
            </label>
            <textarea
              id="BusinessPlan"
              value={formData.BusinessPlan}
              onChange={handleChange}
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
              What challenges do you foresee in reaching your goals?
            </label>
            <textarea
              id="BusinessChallenges"
              value={formData.BusinessChallenges}
              onChange={handleChange}
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
              findings
            </label>
            <textarea
              id="MarketResearch"
              value={formData.MarketResearch}
              onChange={handleChange}
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
              Who are your main competitors?
            </label>
            <textarea
              id="MainCompetitors"
              value={formData.MainCompetitors}
              onChange={handleChange}
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
              industry?
            </label>
            <textarea
              id="CompetitionStrategies"
              value={formData.CompetitionStrategies}
              onChange={handleChange}
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
              profit/loss)?
            </label>
            <textarea
              id="FinancialStatus"
              value={formData.FinancialStatus}
              onChange={handleChange}
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
            <label htmlFor="Funding">How much funding are you seeking?</label>
            <input
              type="text"
              id="Funding"
              value={formData.Funding}
              onChange={handleChange}
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
              How do you plan to use the funds if granted?
            </label>
            <textarea
              id="UseFunds"
              value={formData.UseFunds}
              onChange={handleChange}
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
              Do you have a detailed business plan? if yes, please attach it
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
              What is your timeline for achieving profitability?
            </label>
            <textarea
              id="ProfitabilityTimeline"
              value={formData.ProfitabilityTimeline}
              onChange={handleChange}
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
              How do you plan to market your products or services?
            </label>
            <textarea
              id="MarketProducts"
              value={formData.MarketProducts}
              onChange={handleChange}
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
              What is your pricing strategy?
            </label>
            <textarea
              id="PricingStrategy"
              value={formData.PricingStrategy}
              onChange={handleChange}
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
              Who are the key members of your team, and what are their roles?
            </label>
            <textarea
              id="KeyMembers"
              value={formData.KeyMembers}
              onChange={handleChange}
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
              What relevant experience and skills do you and your team possess?
            </label>
            <textarea
              id="RelevantExperience"
              value={formData.RelevantExperience}
              onChange={handleChange}
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
              How do you plan to address any skill gaps in your team?
            </label>
            <textarea
              id="AddressSkillGap"
              value={formData.AddressSkillGap}
              onChange={handleChange}
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
              business?
            </label>
            <textarea
              id="LegalConsiderations"
              value={formData.LegalConsiderations}
              onChange={handleChange}
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
            <label htmlFor="LegalConsiderations">
              Are there any legal or regulatory considerations specific to your
              business?
            </label>
            <textarea
              id="LegalConsiderations"
              value={formData.LegalConsiderations}
              onChange={handleChange}
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
            <label htmlFor="NecessaryLicenses">
              Do you have the necessary licenses and permits?
            </label>
            <textarea
              id="NecessaryLicenses"
              value={formData.NecessaryLicenses}
              onChange={handleChange}
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
            <label htmlFor="SocialImpactGoals">
              Does your business have any social or environmental impact goals?
            </label>
            <textarea
              id="SocialImpactGoals"
              value={formData.SocialImpactGoals}
              onChange={handleChange}
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
            <label htmlFor="ImpactMeasurePlan">
              How do you plan to measure and report on your impact?
            </label>
            <textarea
              id="ImpactMeasurePlan"
              value={formData.ImpactMeasurePlan}
              onChange={handleChange}
            ></textarea>
          </motion.div>
        )}
        {step === 37 && (
          <motion.div
            variants={textAnimate}
            initial="hide"
            animate={"show"}
            className="formControl"
          >
            <label htmlFor="AdditionalInfo">
              Is there any additional information or context you would like to
              provide about your business or proposal?
            </label>
            <textarea
              id="AdditionalInfo"
              value={formData.AdditionalInfo}
              onChange={handleChange}
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
            <button type="button" onClick={handleNext} disabled={step === 37}>
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
