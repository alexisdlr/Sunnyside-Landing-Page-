import logo from '../images/logofooter.svg'
import Link from './common/Link'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'

const Footer = () => {
  const icons = [
    {id: 1, img: facebook},
    {id: 2, img: instagram},
    {id: 3, img: twitter},
    {id: 4, img: pinterest}
  ]
  const Icon = ({img}) => {
    return(
     <span className='img-cont'>
        <img src={img} alt='brand'/>
     </span>
    )
  }
  return(
    <footer>
      <div className='container-all'>
        <div className='container-logo'>
          <img src={logo}  alt='logo'/>
        </div>
        <div>
          <ul>
            <li>
              <Link 
              content='About'
              />
            </li>
            <li>
              <Link 
              content='Services'
              />
            </li>
            <li>
              <Link 
              content='Projects'
              />
            </li>
             
            
          </ul>
        </div>
        <div>
          <ul>
              {icons.map(icon => (
                <Icon 
                key={icon.id}
                img={icon.img} />
              ) )}
            </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer