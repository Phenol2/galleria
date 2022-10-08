import { createContext, useState } from "react"

 const ModalCtx = createContext()

export const StoreProvider = ({ children }) => {
   const [modalOpen, setModalOpen] = useState(false)
   const [imgSrc, setImgSrc] = useState("")
   
   

   
  return <ModalCtx.Provider value = {{
          setModalOpen,
          modalOpen,
          imgSrc,
          setImgSrc,
        }} 
  >
            { children }
      </ModalCtx.Provider>;
}

export default ModalCtx; 