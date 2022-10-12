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
      theme === "light" ? <HiMoon size="1.5rem" /> : <CgSun size="1.5rem" />;

    return (
        <ToggleButton className={theme ==="dark" ? "" : "active"} onClick={changeTheme}>
            {icon}
        </ToggleButton>
    );
};

const ToggleButton = styled.button`
cursor: pointer;
background-color: transparent;
display: flex;
width: 3rem;
border: 2px solid #183754;
border-radius: 30px;
svg {
    height: 1.2rem;
    transform: translateX(0);
    transition: all 1s linear;
}

&.active {
svg {
    transform: translateX(100%);
}
}


    
`

export default ThemeToggle;