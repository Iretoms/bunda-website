import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import ThemeProvide from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SoftDev from "./pages/SoftDev";
import Loader from "./components/Loader";
import ScrollTop from "./components/ScrollTop";
import Entrepreneur from "./pages/Entrepreneur";

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
      <ScrollTop/>
      <ThemeProvide>
        {loader ? (
          <Loader />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Entrepreneur/>} />
                <Route path="/brand" element={<Home />} />
                <Route path="/software-development" element={<SoftDev />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </ThemeProvide>
    </div>
  );
}

export default App;
