import { createGlobalStyle } from 'styled-components'
import BackgroundSite from './img/background.png'
const GlobalStyles = createGlobalStyle`
    *   {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
    .App {
        display: grid;
        grid-template-columns: 2fr 6fr 2fr;
        height: 100vh;
        /* width: 50vw; */
        /* background-color: lightskyblue; */
    }

`;

export default GlobalStyles;