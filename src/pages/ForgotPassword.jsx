import { useState } from "react";
import styled from "styled-components";
import { Form } from "../style/Styles.js";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    try {
      
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <Section>
      <div className="container">
        <Form>
          <h1 className="title">Forgot Password?</h1>
          <form onSubmit={onSubmit}>
            <div className="form_control">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                required
              />
              <p></p>
            </div>
            <div className="btn_container">
              <button type="submit" className="submit_btn">
                Send Reset Link
              </button>
            </div>
          </form>
        </Form>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 12vh;
  background-color: ${(props) => props.theme.primaryBg};
  width: 100%;
  min-height: 90vh;
  transition: background-color 0.3s ease-out;
  .container {
    width: 87%;
    margin: 0 auto;
    padding: 5rem 0;
  }
`;

export default ForgotPassword;
