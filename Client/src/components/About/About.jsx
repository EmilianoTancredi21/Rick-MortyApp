import estilos from "../About/About.module.css"


const About = () => {
  
  

  return (
    <div className={estilos.container}>
      <h1 className={estilos.titulo}>SOBRE NOSOTROS...</h1>
      <div className={estilos.about}>
      <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1683853118/Proyecto%20JS%20vanilla/pngwing.com_xn8wpe.png" alt="Profile" className={estilos.profileImage} />
      <p className={estilos.text}>
      En Pixel Perfect, ofrecemos una amplia gama de servicios de desarrollo de Front-End que están diseñados para adaptarse a las necesidades únicas de cada cliente. Ya sea que necesites un sitio web totalmente nuevo, una renovación de diseño o mejoras en tu interfaz de usuario actual, estamos aquí para ayudarte.
      </p>
    </div>

    </div>
    
  )
}

export default About