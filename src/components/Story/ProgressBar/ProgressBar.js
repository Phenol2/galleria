import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"


import data from "../../../data/index"

import { motion } from "framer-motion"

import {
  Wrapper,
  Title,
  Buttons,
  Container,
  Line,
} from "./ProgressBar.styled"

import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md"


const ProgressBar = ({ 
    title, 
    author, 
    id, 
    singleStory,
    oldWidth
}) => {
  const [lineWidth, setLineWidth] = useState(oldWidth)
  
  let navigate = useNavigate()
  let location = useLocation()
  
// To check if slide is at the first and last position
  let next = id === 0
  let prev = id === (data.length - 1)
  
// To calculate the width of the progress bar, when pathname changes...
  let length = data.length
  let width = (singleStory.lineWidth / length) * 100
  
  useEffect(() => {
    setLineWidth(width)
  }, [location.pathname, width])
  
  
// Function to slide the show forward, base on previous page id...
  const slideForwardHandler = () => {
    let nextSlide
    if(prev){
      nextSlide = data[data.length - 1]
    }else{
      id++;
      nextSlide = data[id]
    }
    navigate(`/${nextSlide.slug}`)
  
  }
  
  
  // Function to slide the show backward, base on the latest page id...
    const slideBackwardHandler = () => {
     let nextSlide
    if(next){
      nextSlide = data[0]
    }else{
      id--;
      nextSlide = data[id]
    }
    navigate(`/${nextSlide.slug}`)
  }
  
  return (
    <Container
    >
      <Wrapper>
      <Line
      as = {motion.div}
      initial = {{width: 0,}}
      animate = {{width: `${lineWidth}%`,
        transition:{
          delay: 4,
          ease: "linear",
        }
      }}
      >
      </Line>
        <Title>
          <div>{title}</div>
          <div>{author}</div>
        </Title>
        <Buttons>
          <button disabled = {next}>
            <MdOutlineSkipNext
              onClick = {slideBackwardHandler}
          />
          </button>
          <button disabled = {prev}>
            <MdOutlineSkipPrevious  
              onClick = {slideForwardHandler}/>
          </button>
        </Buttons>
      </Wrapper>
    </Container>
    )
}

export default ProgressBar;