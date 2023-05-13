import { useState, useEffect } from "react"
import validation from "../validation"
import styles from "../Form/Form.module.css"

const Form = ({login}) => {

    useEffect(() => {
        document.body.style.backgroundImage = 'url(https://res.cloudinary.com/dg8awhbvm/image/upload/v1683837828/Proyecto%20JS%20vanilla/giphy_lbkvt8.webp)'; // Cambia la imagen de fondo al montar el componente
        return () => {
          document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
        };
      }, []);


const [userData, setUserData] = useState({
    email: "",
    password: ""
})

const [errors, setErrors] = useState({

})

const handleChange = (event) => {
    setErrors(validation({...userData, [event.target.name] : event.target.value }))
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })
}

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
}

  return (
    <div className={styles.container}>
        <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1683848993/Proyecto%20JS%20vanilla/rymapp_vqvlgl.png" alt="" />
    <form className={styles.form}>
        <img src="https://res.cloudinary.com/dg8awhbvm/image/upload/v1683837090/Proyecto%20JS%20vanilla/rick-and-mortyjpg_dwctqs.webp" alt="Rick and Morty" className={styles.image}/>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" value={userData.email} onChange={handleChange}/>
        {errors.email ? (<p>{errors.email}</p>) : errors.email2 ? (<p>{errors.email2}</p>) : (<p>{errors.email3}</p>)} 

        <label  htmlFor="password">Password: </label>
        <input type="password" name="password" value={userData.password} onChange={handleChange}/>
        {errors.password ? (<p>{errors.password}</p>) : (<p>{errors.password2}</p>)}

        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default Form