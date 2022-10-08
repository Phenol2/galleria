import styled from "styled-components"


export const ItemWrapper = styled.div`
    width: 100%;
    position: relative;
   
   & > a{
    text-decoration: none;
    
    & > img{
      width: 100%;
      height: 100%;
    }
   }
`

export const Title = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px 7px;
    backdrop-filter: blur(4px);
    bottom: 22px;
    left: 15px;
    z-index: 100;
    line-height: 34px;
    
    & > h1{
      color: white;
    }
  
    & > h5{
      color: rgba(255, 255, 255, 0.7);
    }
`