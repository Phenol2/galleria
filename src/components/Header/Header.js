import {
  HeaderWrapper,
  Logo,
} from "./Header.styled"

import { useLocation, Link } from "react-router-dom"

import { motion } from "framer-motion"

const headVariant = {
  animate:{
    transition:{
      staggerChildren: 1,
    }
  }
}

const childOne = {
  initial:{
     x: "-100vw",
  },
  animate:{
    x: 0,
    transition:{
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    }
  }
}

const childTwo = {
  initial:{
     opacity: 0,
  },
  animate:{
    opacity: 1,
    transition:{
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

const Header = () => {
  let location = useLocation()
  
  return (
    <HeaderWrapper
    as = {motion.div}
    variants = {headVariant}
    initial = "initial"
    animate = "animate"
    >
      <Logo
      as = {motion.h1}
      variants = {childOne}
      >
        galleria.
      </Logo>
      {
      location.pathname !== "/" 
       ? <Link to = "/" >
       <motion.span
        variants = {childTwo}
        exit = {{opacity: 0, transition:{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}}
       > STOP </motion.span> 
        SLIDESHOW
      </Link>
      :  <Link to = "/starry-night" >
       <motion.span 
        variants = {childTwo}
        exit = {{opacity: 0, transition:{
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}}
       >
        START </motion.span>
         SLIDESHOW
      </Link>
      }
    </HeaderWrapper>
    )
}

export default Header;