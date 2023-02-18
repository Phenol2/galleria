import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 30px;
    padding-inline: 15px;
    
    & > a{
      align-self: flex-start;
      color: rgba(0, 0, 0, 0.5);
      font-size: 20px;
      padding-right: 15px;
      margin-block: 70px 120px;
    }

    @media only screen and (min-width: 1200px) {
    
    }
`

export const Top = styled.div`
    position: relative;
    
    & > img:nth-child(1){
      width: 100%;
    }

    @media only screen and (min-width: 1200px) {
      width: 600px;
    }
    
`

export const View = styled.div`
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px 20px;
      position: absolute;
      top: 20px;
      left: 35px;
      z-index: 100;
      font-weight: bold;
      backdrop-filter: blur(10px));
      
      & > svg{
        font-size: 18px;
        font-weight: bold;
      }

      @media only screen and (min-width: 1200px) {
        position: absolute;
        bottom: 0px;
        left: 0;
        z-index: 100;
      }
`

export const AuthorImg = styled.img`
      position: absolute;
      bottom: -75px;
      left: 0;
      margin-block: 15px;
      width: 60px;
      height: 60px;
      object-fit: contain;
`

export const Title = styled.div`
    position: absolute;
    width: 250px;
    background-color: #fff;
    padding: 28px 7px 8px 7px;
    backdrop-filter: blur(4px);
    bottom: 0px;
    left: 0;
    z-index: 100;
    line-height: 36px;
    
    & > h1{
      color: #000;
    }
  
    & > h4{
      color: rgba(0, 0, 0, 0.6);
    }
`

export const Year = styled.h1`
    font-size: 100px;
    margin-top: 30px;
    margin-bottom: 0px;
    color: rgba(0, 0, 0, 0.1);
    margin-right: -150px;
`

export const Description = styled.p`
    padding-inline: 12px;
    line-height: 30px;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
    text-align: justify;
    margin-top: 0px;

    @media only screen and (min-width: 1200px) {
      width: 300px;
    }
`

export const Side = styled.div`
@media only screen and (min-width: 1200px) {
  width: 400px;
}
`
export const Holder = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    position: relative;

    @media only screen and (min-width: 1200px) {
      display: flex;
      flex-direction: row;
      padding-bottom: 200px;
      padding-inline: 10px;
      gap: 60px;
    }
`