import Link from "./common/Link"
import Parag from "./common/Parag"
import Title from "./common/Title"

export const TextSection = ({className, titleClass, title, parag, classParag, linkCont, classLink}) => {
  return(
    <div className={className}>
      <div className="container-text">
        <Title 
        className={titleClass}
        title={title}

        />
        <Parag 
        content={parag}
        className={classParag}
        />
        <Link
        content={linkCont}
        className={classLink} 
        />
      </div> 
    </div>
  )
}