import styled from "styled-components";

const HeaderStyle = styled.div`
    background-color: silver;
    height: 15vh;
    padding: 0;
    padding-left: 30px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 40vh;

    h1 {
        justify-self: center;
        align-self: center;
        font-size: 10vh;
    }

    img {
       height: 15vh;
    }
`


export default HeaderStyle