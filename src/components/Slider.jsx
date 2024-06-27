import { useContext } from 'react'
import iconLeft from '../images/icon-angle-left.svg'
import iconRight from '../images/icon-angle-right.svg'
import { HeroContext } from '../context/HeroContext'

const Slider = () => {
  const { scrollToImage } = useContext(HeroContext)

  return (
    <div className='arrows_container'>
      <div className='left' onClick={() => scrollToImage('prev')}>
        <img id='left_angle' src={iconLeft} alt='left icon' />
      </div>
      <div className='right' onClick={() => scrollToImage('next')}>
        <img id='right_angle' src={iconRight} alt='right icon' />
      </div>
    </div>
  )
}

export default Slider
