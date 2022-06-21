import Title from './common/Title';
import arrow from '../images/icon-arrow-down.svg'


const Main = () => {
  return(
    <main>
       <div className='main-banner'>
          <Title 
          isHeading={true}
          title='WE ARE CREATIVES'
          className='main-banner-title'/>
        <div>
          <img src={arrow} alt='arrow down svg' />
        </div>
      </div>
    </main>
  )
}
export default Main