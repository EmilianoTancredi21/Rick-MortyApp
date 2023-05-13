import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../Redux/actions"
import { useState } from "react"
import styles from "../Favorites/Favorites.module.css"

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value)) 
    }

    return (
        <div>
          <select onChange={handleOrder} className={styles.select}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
      
          <select onChange={handleFilter} className={styles.select}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>

          <div className={styles.container}>
          <div className={styles.cardsRow}>
            {myFavorites.map(({ id, image, name, status, species, gender, origin, onClose }) => (
              <div key={id} className={styles.cardWrapper}>
                <Card
                  id={id}
                  image={image}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  onClose={onClose}
                />
              </div>
            ))}
          </div>
          </div>
      
        </div>
      );
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps,null)(Favorites)