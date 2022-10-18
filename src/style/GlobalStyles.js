import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Satoshi', sans-serif;
    &.fixed {
        overflow: hidden;
    }
}

main {
    margin-top: 12vh;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

`;

// font-family: 'Satoshi', sans-serif;

export default GlobalStyles