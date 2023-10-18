import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

const GoogleButton = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //if user doesnt exists, create
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          timeStamp: serverTimestamp(),
        });
      }

      navigate("/get-started");
    } catch (error) {
      toast.error("Could not authorize with google");
    }
  };
    return (
      <Button onClick={onClick}>
        <FaGoogle /> {location.pathname === "/sign-up" ? "Sign Up" : "Sign In"} with Google
      </Button>
    );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 2.5rem;
  background-color: ${(props) => props.theme.blue};
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

export default GoogleButton;