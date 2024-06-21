import {createGlobalStyle} from "styled-components";
import {myTheme} from "../Theme.styled";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${myTheme.colors.greys.light};
    }
`

