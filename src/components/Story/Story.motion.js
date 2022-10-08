export const parentVariant = {
  initial:{
    opacity: 0,
  },
  animate:{
    opacity: 1,
    duration: 1,
    transition:{
      staggerChildren: 1,
      delayChildren: 0.6,
      delay: 0.6,
    }
  }
}

export const parentTwoVariant = {
  initial:{
    opacity: 0,
  },
  animate:{
    opacity: 1,
    transition:{
      staggerChildren: 1,
      delayChildren: 0.6,
      delay: 0.6,
    }
  }
}

export const childOneVariant = {
  initial:{
    x: "-100vw",
    filter: "blur(4px)",
  },
  animate:{
    x: 0,
    filter: "blur(0)",
    transition:{
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    }
  }
}

export const childTwoVariant = {
    initial:{ 
      scale: 0,
    },
       animate :{ 
        scale: 1,
        transition :{
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96],
    }
       }
}

export const childThreeVariant = {
    initial:{ 
      opacity: 0,
    },
       animate :{ 
        opacity: 1,
        transition :{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
    }
       }
}

export const childFourVariant = {
    initial:{ 
      x: "100vw",
    },
       animate :{ 
        x: 0,
        transition :{
          duration: 1.7,
          ease: [0.43, 0.13, 0.23, 0.96],
    }
       }
}

export const childFiveVariant = {
    initial:{ 
      opacity: 0,
    },
       animate :{ 
        opacity: 1,
        transition :{
          duration: 2.7,
          ease: [0.43, 0.13, 0.23, 0.96],
    }
       }
}

export const exitImg = {
              x: "-100vw",
              opacity: 0,
              filter: "blur(4px)",
              transition :{
              duration: 0.7,
              ease: "linear",
              }
}
          
export const exitTwo = {
              scale: 0,
              opacity: 0,
              filter: "blur(4px)",
              transition :{
              duration: 0.4,
              ease: "linear",
              }
          }
          
  export const exitFour = {
              opacity: 0,
              transition :{
              duration: 0.4,
              ease: "linear",
              }
          }        

export const exitThree = {
              x: "100vw",
              opacity: 0,
              filter: "blur(4px)",
              transition :{
              duration: 0.4,
              ease: "linear",
              }
          }
          
  export const exitOne = {
              opacity: 0,
              filter: "blur(4px)",
              transition :{
              duration: 0.4,
              ease: "linear",
              }
          }