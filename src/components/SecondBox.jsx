import arrow from '../images/icon-arrow.svg'
import { TITLE } from '../constants/title'
import { useContext } from 'react'
import { HeroContext } from '../context/HeroContext'

const SecondBox = () => {
  const { currentIndex } = useContext(HeroContext)

  return (
    <div className='second_box_container'>
      <h2 className='title_h2'>{TITLE[currentIndex].titleUrl}</h2>
      <p className='paragraph_p'>{TITLE[currentIndex].paraUrl}</p>
      <div className='shop_container'>
        <h3 className='shop'>Shop now</h3>
        <img id='arrow' src={arrow} alt='arrow' />
      </div>
    </div>
  )
}

export default SecondBox
