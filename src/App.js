import ThemeToggle from "./components/ThemeToggle";
import GlobalStyles from "./style/GlobalStyles";
import ThemeProvide from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvide>
        <ThemeToggle />
        heyyy
      </ThemeProvide>
    </div>
  );
}

export default App;
