import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "./style/GlobalStyles";
import ThemeProvide from "./context/ThemeContext";
import { UserProvider } from "./context/user/UserContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import SoftDev from "./pages/SoftDev";
import Loader from "./components/Loader";
import ScrollTop from "./components/ScrollTop";
import Entrepreneur from "./pages/Entrepreneur";
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import Access from "./pages/Access";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, [loader]);

  return (
    <div className="App">
      <GlobalStyles />
      <ScrollTop />
      <ThemeProvide>
        <UserProvider>
          {loader ? (
            <Loader />
          ) : (
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Entrepreneur />} />
                  <Route path="/brand" element={<Home />} />
                  <Route path="/software-development" element={<SoftDev />} />
                  <Route path="/get-started" element={<PrivateRoute />}>
                    <Route path="/get-started" element={<GetStarted />} />
                  </Route>
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/access-training" element={<Access />} />
                </Routes>
                <ToastContainer />
              </main>
            </>
          )}
        </UserProvider>
      </ThemeProvide>
    </div>
  );
}

export default App;
