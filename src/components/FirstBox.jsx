import React, { useContext, useEffect, useRef, useState } from 'react'
import { HeroContext } from '../context/HeroContext'
import data from '../data/data'

const FirstBox = () => {
  const listtRef = useRef()
  const { currentIndex } = useContext(HeroContext)
  const [windowWith, setWindowWith] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const listNode = listtRef.current
    const imgNode = listNode.querySelectorAll('li > img')[currentIndex]

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  return (
    <div className='first_box_container'>
      <div className='slider_container'>
        <div className='container_img'>
          <ul id='ul_slider' ref={listtRef}>
            {
              data.map((item) => {
                return (
                  <li key={item.id} className='li_slider_img'>
                    <img
                      src={windowWith <= 480 ? item.imgUrlMobil : item.imgUrlDesktop}
                      width='100%'
                      height='auto'
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FirstBox
