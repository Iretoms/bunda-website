import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Form } from "../style/Styles.js";
// import GoogleButton from "../components/GoogleButton";
import Spinner from "../components/Spinner";
import { UserContext } from "../context/user/UserContext";
import { signUp } from "../context/user/UserActions.js";

const SignUp = () => {
  const { loading, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const eyeIcon = show ? <BiShowAlt /> : <BiHide />;
  const { name, email, password } = formData;

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

    const formDataCopy = { ...formData };
    formDataCopy.language = "tr";
    formDataCopy.platform = "Android";
    formDataCopy.timezone = 0;
    formDataCopy.devideId = "1111";

    const signUpData = await signUp(formDataCopy);

    if (signUpData) {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: signUpData,
      });
    } else {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload: signUpData,
      });
    }
    setFormData({ name: "", email: "", password: "" });
    navigate("/sign-in");
  };
  return loading ? (
    <Spinner />
  ) : (
    <Section>
      <div className="container">
        <Form>
          <h1 className="title">Sign Up</h1>
          <form onSubmit={onSubmit}>
            <div className="form_control">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                required
              />
            </div>
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
                Sign Up
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
  min-height: 100vh;
  transition: background-color 0.3s ease-out;
  .container {
    width: 87%;
    margin: 0 auto;
    padding: 5rem 0;
  }
`;

export default SignUp;
