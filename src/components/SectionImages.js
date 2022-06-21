import Parag from "./common/Parag"
import Title from "./common/Title"

const SectionImages = ({className, title, parag}) => {
  return(
    <article className={className}>
      <div className="container__text">
        <Title
         className='container__text-title'
         title={title}

        />
        <Parag 
          className='container__text-parag'
          content={parag}
          
        />
      </div>
    </article> 
  )
}
export default SectionImages