import Main from './components/Main';
import Navbar from './components/Navbar';
import Section from './components/Section';
import transfrom from './images/desktop/image-transform.jpg'
import stand from './images/desktop/image-stand-out.jpg'
import SectionImages from './components/SectionImages';

function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Main />
        <Section
          hasText={true}
          className='section-transform'
          classText='section-transform__text'
          titleClass='section-transform__text-title'
          title='Transform your brand'
          parag='We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you.'
          classParag='section-transform__text-parag'
          linkCont='LEARN MORE'
          classLink='section-transform__text-link'
          img={transfrom}
          classImgCont='section-transform__img'
        />
         <Section
         hasText={true}
          className='section-stand'
          classText='section-stand__text'
          titleClass='section-stand__text-title'
          title='Stand out to the right audience'
          parag='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
          classParag='section-stand__text-parag'
          linkCont='LEARN MORE'
          classLink='section-stand__text-link'
          img={stand}
          classImgCont='section-stand__img'
        />
        <section className='section-images'>
          <SectionImages
          className='section-orange'
          title='Graphic design'
          parag='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
          /> 
          <SectionImages
          className='section-photo'
          title='Photography'
          parag='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          />           
       </section> 
      
    </div>
  );
}

export default App;
