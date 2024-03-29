import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Form } from "../style/Styles.js";
// import GoogleButton from "../components/GoogleButton.jsx";
import Spinner from "../components/Spinner";
import { UserContext } from "../context/user/UserContext";
import { login } from "../context/user/UserActions.js";

const SignIn = () => {
  const { loading, isLoggedIn, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const eyeIcon = show ? <BiShowAlt /> : <BiHide />;

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    const loginData = await login(email, password);
    

    if (loginData) {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: loginData,
      });
      localStorage.setItem("user", JSON.stringify(loginData));
    } else {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload: loginData,
      });
    }
    // console.log(isLoggedIn);
    // console.log("result", loginData);
    setFormData({ email: "", password: "" });
    navigate("/get-started");
  };

  return loading ? (
    <Spinner />
  ) : (
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
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                required
              />
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
                  required
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
          {/* <div className="googleBtn_container">
            <p>or</p>
            <GoogleButton />
          </div> */}
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
