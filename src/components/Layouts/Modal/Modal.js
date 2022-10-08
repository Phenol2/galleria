import { motion } from "framer-motion"

import { useContext } from "react"
import ModalCtx from "../../../ModalContext/ModalCtx"

import {
  Wrapper,
  Backdrop
} from "./Modal.styled"

const Modal = () => {
  let { 
        modalOpen, 
        imgSrc, 
        setModalOpen 
  } = useContext(ModalCtx)
  
  const clickHandler = (e) => {
    if(e.target.classList.contains("backdrop")){
      setModalOpen(false)
    }
  }
  
  return (
    <>
    {
   modalOpen && ( 
   <Wrapper  
      key = "backdrop"
      as = {motion.div}
      initial = {{opacity: 0,}}
      animate = {{opacity: 1,
          transition:{
            duration: 0.6,
            ease: "linear"
          },
        }}
        exit = {{
          opacity: 0,
          transition:{
            duration: 1,
            ease: "ease-in",
          },
        }}
      >
      <Backdrop
        className = "backdrop"
        onClick = { clickHandler }
      >
      <div 
        initial = {{opacity: 0,}}
        animate = {{opacity: 1,
          transition:{
            duration: 1.2,
            ease: "linear",
          },
        }}
        exit = {{
          opacity: 0,
          transition:{
            duration: 1.2,
            ease: "ease-in",
          },
        }}
        onClick = {() => setModalOpen(false)}
      >
       Close
      </div>
        <motion.img 
          initial = {{x: "-100vh"}}
          animate = {{x: 0,
          transition:{
            duration: 1,
            ease: "linear",
          },
        }}
        exit = {{
          x: "-100vw",
          transition:{
            duration: 1,
            ease: "ease-in",
          },
        }}
          src = {imgSrc}  
          alt = "modalImg"
          />
      </Backdrop>
    </Wrapper>)
    }
    </>
    )
}

export default Modal;