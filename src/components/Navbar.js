import React,{useState} from 'react'
import Link from "./common/Link";
import logo from '../images/logo.svg'
import burguer from '../images/icon-hamburger.svg'
const Navbar = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  const dataNav = [
    {id:1 , to:'About'},
    {id:2 , to:'Services'},
    {id:3 , to:'Projects'},
    {id:4 , to:'CONTACT'}
  ]
  return (
    <header>
      <nav className="navigation">
        <div>
          <img src={logo} alt='logo svg' />
        </div>
        <ul className={`navigation__ul ${clicked ? 'active': ''}`}>
          {dataNav.map(item => (
            <li key={item.id} className='navigation__ul-li'>
              <Link
              content={item.to}
              className='link'
              />
            </li>
          ))}
        </ul>
        <button 
        onClick={handleClick}
        className='burguer'>
            <img src={burguer} alt='hamburguer svg'  />
        </button>
      </nav>
    </header>
    );
}

export default Navbar ;