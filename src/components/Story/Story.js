import { useContext } from "react"
import { useParams } from "react-router-dom"

import data from "../../data"
import { motion } from "framer-motion"



import ModalCtx from "../../ModalContext/ModalCtx"
import { BiExpand } from "react-icons/bi"


import ProgressBar from "./ProgressBar/ProgressBar"

import {
  parentVariant,
  parentTwoVariant,
  childOneVariant,
  childTwoVariant,
  childThreeVariant,
  childFourVariant,
  childFiveVariant,
  exitImg,
  exitTwo,
  exitFour,
  exitThree,
  exitOne
} from "./Story.motion"

import {
  Container,
  Top,
  Title,
  AuthorImg,
  Year,
  Description,
  View
} from "./Story.styled"


const Story = () => {
  let { slug } = useParams()

    
    
  // find a single story base on the the slug
  let singleStory = data.find(item => {
    return item.slug === slug
  })
  
  let length = data.length
  let width = (singleStory.lineWidth / length) * 100



  let { 
      setModalOpen, 
      setImgSrc, 
  } = useContext(ModalCtx)
  
  const clickHandler = () => {
    setImgSrc(singleStory.images.hero.small)
    setModalOpen(true)
  }
  
  
  return (
    <>
    <Container
    as = {motion.div}
    variants = {parentVariant}
    initial = "initial"
    animate = "animate"
    >
      <View 
      as = {motion.div}
      variants = {childTwoVariant}
      exit = {exitTwo}
      onClick = {clickHandler}
      >
      <BiExpand />
        View Image
      </View>
      <Top
        as = {motion.div}
        variants = {parentTwoVariant}
        initial = "initial"
        animate = "animate"
      >
    
      
        <motion.img  
          src = {singleStory.images.hero.small} 
          alt = {singleStory.name}
          variants = {childOneVariant}
          exit = {exitImg}
          />
       <Title
       as = {motion.div}
       variants = {childTwoVariant}
        exit = {exitTwo}
       >
        <h1>{ singleStory.name }</h1>
        <h4>{singleStory.artist.name}</h4>
      </Title>
        <AuthorImg 
        as = {motion.img}
        variants = { childThreeVariant }
        exit = {exitOne}
          src = {singleStory.artist.image} 
          alt = {singleStory.artist.name}
          />
      </Top>
      <Year
        as = {motion.p}
        variants = { childFourVariant }
        exit = {exitThree}
      >
        { singleStory.year}
      </Year>
      <Description
      as = {motion.p}
      variants = {childFiveVariant}
      exit = {exitFour}
      >
        {singleStory.description}
      </Description>
      
      <motion.a 
      target = "_blank"
      href = {singleStory.source}
      variants = {childFiveVariant}
      exit = {exitFour}
      >
        GO TO SOURCE
      </motion.a>
    </Container>
    <ProgressBar
         singleStory = {singleStory}
         id = {singleStory.id}
        title = {singleStory.name}
        author = {singleStory.artist.name}
        oldWidth = {width}
        />
    </>
    )
}

export default Story;