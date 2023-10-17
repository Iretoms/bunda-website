import { useState } from "react";
import styled from "styled-components";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { Form } from "../style/Styles.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const eyeIcon = show ? <BiShowAlt /> : <BiHide />;
  const { name, email, password } = formData;

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.image = "";
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong, try again");
    }
  };
  return (
    <Section>
      <div className="container">
        <Form>
          <h1 className="title">Sign Up</h1>
          <form onSubmit={onSubmit}>
            <div className="form_control">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" value={name} onChange={onChange} />
            </div>
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
  min-height: 100vh;
  transition: background-color 0.3s ease-out;
  .container {
    width: 87%;
    margin: 0 auto;
    padding: 5rem 0;
  }
`;

export default SignUp;