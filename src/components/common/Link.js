const Link = ({className, content, href}) => {
  return (
  <a 
    href={href}
    className={className}> {content}
  </a>
  );
}

export default Link;