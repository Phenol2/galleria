import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
`

export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    
    & > img{
      width: 90%;
    }
    
    & > div{
      padding: 15px 25px;
      color: white;
      font-weight: bolder;
      font-size: 30px;
      text-align: right;
      align-self: flex-end;
      margin: 0px 6px;
    }
`