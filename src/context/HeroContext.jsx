import { createContext, useState } from 'react'
import data from '../data/data'

export const HeroContext = createContext()

export function HeroProvider ({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? 0 : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1)
      }
    }
  }

  return (
    <HeroContext.Provider value={{
      currentIndex,
      scrollToImage
    }}
    >
      {children}
    </HeroContext.Provider>
  )
}
