import logo from '../images/logo.svg'
import burguer from '../images/icon-hamburger.svg'
import iconClose from '../images/icon-close.svg'
import { useState } from 'react'

const Navbar = () => {
  const [showMenuMobile, setshowMenuMobile] = useState(false)

  const handleShowMenuMobile = () => {
    if (!showMenuMobile) {
      setshowMenuMobile(true)
    }
  }

  const hideMenuMobile = () => {
    if (showMenuMobile) {
      setshowMenuMobile(false)
    }
  }
  return (
    <div className='navbar_container'>
      <nav>
        <div className='burguer_container'>
          <img
            src={burguer}
            onClick={() => handleShowMenuMobile()}
            alt='burguer'
          />
        </div>
        <div className='logo_container'>
          <img src={logo} alt='logo' />
        </div>
        <ul className='ul_menu'>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div className={`ul_mobile_container ${showMenuMobile ? '' : 'hide'}`}>
          <div className='white_square'>
            <div className='icon_close'>
              <img
                src={iconClose}
                onClick={() => hideMenuMobile()}
                alt='close_icon'
              />
            </div>
            <ul className='ul_mobile'>
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
