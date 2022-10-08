import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
  ItemWrapper,
  Title,
} from "./Item.styled"

const Item = ({ item }) => {
  return (
    <ItemWrapper
    as = {motion.div}
    initial = {{opacity: 0,}}
    animate = {{opacity: 1,}}
    transition = {{
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96]
    }}
    exit = {{scale: 0}}
    >
     <Link to = {`/${item.slug}`}> 
      <motion.img 
        src = {item.images.thumbnail} 
        alt = {item.name}
        initial = {{filter: "blur(4px)"}}
        whileInView = {{filter: "blur(0)",}}
        />
      <Title>
        <h1>{ item.name }</h1>
        <h5>{item.artist.name}</h5>
      </Title>
       </Link>
    </ItemWrapper>
    )
}

export default Item