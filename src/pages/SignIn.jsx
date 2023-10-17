import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Form } from "../style/Styles.js";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const eyeIcon = show ? <BiShowAlt /> : <BiHide />;

  const { email, password } = formData;

  const onChange = (e) => {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/get-started");
      }
    } catch (error) {
      toast.error("Sorry you dont have an account, please Sign Up");
    }
  };

  return (
    <Section>
      <div className="container">
        <Form>
          <p className="signup_link">
            Not registered? <Link to="/sign-up">Sign up</Link>
          </p>
          <h1 className="title">Sign In To Your Account</h1>
          <form onSubmit={onSubmit}>
            <div className="form_control">
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" value={email} onChange={onChange} />
              <p></p>
            </div>
            <div className="form_control password">
              <label htmlFor="password">Password</label>
              <div className="password_input">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                />
                <button type="button" onClick={() => setShow(!show)}>
                  {eyeIcon}
                </button>
              </div>
              <p></p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="btn_container">
              <button type="submit" className="submit_btn">
                Sign In
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

export default SignIn;
