const Title = ({isHeading, title, className}) => {
  return ( 
    isHeading ? <h1 className={className} >
      {title}
      </h1>: <h2 className={className}>{title}</h2>
   );
}

export default Title;