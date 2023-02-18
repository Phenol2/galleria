import styled from "styled-components"


export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media only screen and (min-width: 1200px) {
        width: 100%;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
`