import FirstBox from './components/FirstBox'
import SecondBox from './components/SecondBox'
import ThirdBox from './components/ThirdBox'
import FourthBox from './components/FourthBox'
import FifthBox from './components/FifthBox'
import Slider from './components/Slider'
import Vacio from './components/Vacio'
import { HeroProvider } from './context/HeroContext'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='main_container'>
      <HeroProvider>
        <Navbar />
        <FirstBox />
        <SecondBox />
        <Slider />
        <Vacio />
        <ThirdBox />
        <FourthBox />
        <FifthBox />
      </HeroProvider>
    </div>
  )
}

export default App
