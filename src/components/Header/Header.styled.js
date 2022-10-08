import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width: 100vw;
    padding: 22px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.4);
    
    & > a{
      text-decoration: none;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, 0.5);
    }
`

export const Logo = styled.h1`
    font-family: "Gemunu Libre";
    font-weight: bolder;
`