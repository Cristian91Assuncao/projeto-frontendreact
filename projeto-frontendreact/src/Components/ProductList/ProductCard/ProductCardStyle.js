import styled from "styled-components";

export const ProductCardStyles = styled.section`
    border: solid 2px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* height: 270px; */
    /* gap: 40px;     */
    

    div {
        /* border: solid 1px black; */
        
        width: 250px;
        height: 300px;
        /* grid-auto-flow: row */
    }

    p {
        margin: 10px 5px 0 5px;
    }

    button {
        margin: 5px;
        text-align: center;
        display: grid;
        justify-self: center;
    }

    img {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px black;
        height: 210px;
        width: 250px;
    }

    ul {
        list-style-type: none;
    }
`