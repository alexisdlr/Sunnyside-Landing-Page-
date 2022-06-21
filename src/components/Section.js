import { TextSection } from "./TextSection"



const Section = ({className, classText, titleClass, title, parag, classParag,
   linkCont, classLink, img, classImgCont }) => {
  return(
     <section className={className}>
                <TextSection 
                  className={classText} 
                  titleClass={titleClass} 
                  title={title}
                  parag={parag}
                  classParag={classParag}
                  linkCont={linkCont}
                  classLink={classLink}
                />
                <div className={classImgCont}>
                  <img 
                  src={img}
                  alt='img sunnyside'
                  />
                </div>
             </section>
  )
}
export default Section