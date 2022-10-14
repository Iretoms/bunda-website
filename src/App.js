import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import ThemeProvide from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import SoftDev from "./pages/SoftDev";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvide>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/software-development" element={<SoftDev />} />
          </Routes>
        </main>
      </ThemeProvide>
    </div>
  );
}

export default App;
