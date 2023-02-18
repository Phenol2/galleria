import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100vw;

`
export const Line = styled.div`
      position: absolute;
      top: -2px;
      left: 0;
      z-index: 20;
      height: 3px;
      background-color: #000;
`
  


export const Wrapper = styled.div`
    width: 100vw;
    padding: 20px 10px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    border-top: 2px solid rgba(0, 0, 0, 0.3);
`

export const Title = styled.div`
    flex: 2.5;
    
    & > div:nth-child(1){
      padding-block: 5px;
      font-size: 20px;
      font-weight: bold;
    }
    
    & > div:nth-child(2){
      color: rgba(0, 0, 0, 0.5);
    }
`

export const Buttons = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    & > button{
        padding: 10px;
        background-color: transparent;
        border: none;
    
      & > svg{
        font-size: 35px;
      }
    }
`