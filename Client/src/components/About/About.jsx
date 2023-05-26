import estilos from "../About/About.module.css"


const About = () => {
  
  

  return (
    <div className={estilos.container}>
      <h1 className={estilos.titulo}>SOBRE NOSOTROS...</h1>
      <div className={estilos.about}>
      <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1683853118/Proyecto%20JS%20vanilla/pngwing.com_xn8wpe.png" alt="Profile" className={estilos.profileImage} />
      <p className={estilos.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor nec blandit pharetra.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi dapibus
        libero et nisl mollis, vitae congue justo sagittis. Sed in arcu nec turpis tincidunt euismod. Nullam
        ultricies eros velit, eget volutpat nunc tempor id. Sed varius ligula sit amet nisl consequat commodo.
      </p>
    </div>

    </div>
    
  )
}

export default About