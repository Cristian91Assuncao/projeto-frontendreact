import styled from "styled-components";

export const HomeStyles = styled.section`

    padding: 10px 0 5px 0;
    /* border: solid 1px black; */
    height: 90vh;

    .cabecaHome {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 20px;
    }

    .ordem {
        display: flex;
        justify-self: end;
        margin-top: 0;
    }
    
    .produtosHome {
        margin: 20px 5px 0 5px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        /* justify-items: center;
        align-items: center;*/
        gap: 60px;
        /* border: solid 1px black; */
    }
`