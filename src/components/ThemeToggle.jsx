import { useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const setMode = (mode) => {
      window.localStorage.setItem("theme", mode);
      setTheme(mode);
    };

    const changeTheme = () => {
      theme === "light" ? setMode("dark") : setMode("light");
    };

    useEffect(() => {
      const localTheme = window.localStorage.getItem("theme");
      localTheme ? setTheme(localTheme) : setTheme("dark");
    }, []);

    const icon =
      theme === "light" ? <HiMoon size="1.3rem" /> : <CgSun size="1.2rem" color="#fff" />;

    return (
        <ToggleButton className={theme === "light" && ("active")} onClick={changeTheme}>
            {icon}
        </ToggleButton>
    );
};

const ToggleButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryBg};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid #fff;
  transition: all 0.5s linear;
  &.active {
    border: 2px solid #333;
  }
`;

export default ThemeToggle;