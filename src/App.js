import { Routes, Route, useLocation } from "react-router-dom"
/*import { useContext } from "react"
import  ModalCtx from "./ModalContext/ModalCtx"*/



import { ScrollToTop } from "./utils/ScrollToTop"
import { AnimatePresence } from "framer-motion"

import {
  Header, 
  Home,
  Story,
  Modal,
} from "./components"

function App() {
  const location = useLocation()
  
  return (
    <ScrollToTop>
    <main style = {{ 
      width: "100vw",
      maxWidth: "100vw",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
    }}>
     <Modal />
      <Header />
      <AnimatePresence exitBeforeEnter>
      <Routes
        location = {location}
        key = {location.pathname}
      >
        <Route path = "/" element = {<Home />}/>
        <Route path = "/:slug" element = {<Story />}/>
      </Routes>
      </AnimatePresence>
    </main>
    </ScrollToTop>
  );
}

export default App;
