import  data  from "../../../data/index"
import Item from "./Item/Item"
import { motion } from "framer-motion"

import {
  CardWrapper,
} from "./Card.styled"

const Card = () => {

  return (
    <CardWrapper
    as = {motion.div}
    animate = {{
      transition:{
        staggerChildren: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.2,
      }
    }}
    exit = {{opacity: 0,}}
    >
      {
        data.map(item => {
          return <Item item = {item} key = {item.id}/>
        })
      }
    </CardWrapper>
    )
}

export default Card;