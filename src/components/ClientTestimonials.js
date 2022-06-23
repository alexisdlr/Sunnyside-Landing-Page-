import Images from "../images/Images"
import Title from "./common/Title"

const Testimonial = ({testimonial, name, occupation, img}) => { 
  return(
    <div className="testimonial__container">
      <div className="testimonial__container-img">
        <img src={img} alt='client img' />
      </div>
      <div className="testimonial__container-text">
        <p className="testimonial__container-text-parag">
         {testimonial}
        </p>
        <Title 
        className='testimonial__container-text-title'
        isHeading={false}
        title={name}
        />
          <span className="testimonial__container-text-occupation">
            {occupation}
          </span>
        </div>
    </div>
  )
}
const ClientTestimonial = () => {
  const DataClients = [
    {id:1 , name: 'Emily R.', occupation: 'Marketing Director', testimonial: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.', img: Images.emily},
    {id:2 , name: 'Thomas S.', occupation: 'Chief Operating Officer', testimonial: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.', img: Images.thomas},
    {id:3 , name: 'Jennie F.', occupation: 'Business Owner', testimonial: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!', img: Images.jennie}

  ]
  return(
    <section className="section__testimonial">
      <div className="section__testimonial-containertitle">
        <Title 
          className='title'
          title='Client testimonials'
          />
      </div>
      <div className="section__testimonial-clients">
        {
          DataClients.map(client => (
            <Testimonial 
            key={client.id}
            name={client.name}
            img={client.img}
            testimonial={client.testimonial}
            occupation={client.occupation}

            />
          ))
        }
      </div>
    </section>
  )
}
export default ClientTestimonial




