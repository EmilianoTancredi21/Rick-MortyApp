import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import { useState, useEffect } from "react";

function Card({id, name, status, gender, image, species, origin, onClose, addFav, removeFav, myFavorites}) {

  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({id, name, status, gender, image, species, origin, onClose})
    setIsFav(!isFav)
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

 return (
  <div className={styles.card}>
    <div className={styles.cardInner}>
      <img src={image} alt='' className={styles.cardImage} />
      <button onClick={handleFavorite} className={styles.favoriteButton}>
        {isFav ? '❤️' : '🤍'}
      </button>
      <button onClick={() => onClose(id)} className={styles.closeButton}>✖</button>
      <Link to={`/detail/${id}`} className={styles.cardLink}>
        <h3 className={styles.cardTitle}>{name}</h3> 
      </Link>
    </div>
    <h3 className={styles.cardStatus}>Status 🙂/💀: {status}</h3>
    <h3 className={styles.cardSpecies}>Species: {species}</h3>
    <h3 className={styles.cardGender}>Gender 🧑/👧: {gender}</h3>
    <h3 className={styles.cardOrigin}>🌎 {origin}</h3>
  </div>
);
}

const mapDispatchToProps = (dispatch) => {
  return {addFav: (character) => dispatch(addFav(character)),
  removeFav: (id) => dispatch(removeFav(id))}
}

const mapStateToProps = (state) => {
  return {
    myFavorites : state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);