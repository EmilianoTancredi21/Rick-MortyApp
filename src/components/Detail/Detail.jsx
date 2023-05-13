import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "../Detail/Detail.module.css"

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


     return (
      <div className={styles.container}>
        {character && (
          
          <div className={styles.cardRow}>
            <div className={styles.card}>
              <img src={character.image} alt="" className={styles.characterImage} />
              <h2 className={styles.characterName}>{character.name}</h2>
            </div>
            <div className={styles.card}>
              <h2>{character.status}</h2>
              <h2>{character.species}</h2>
              <h2>{character.gender}</h2>
              <h2>{character.origin?.name}</h2>
            </div>
          </div>
          
        )}
      </div>
    );
}

export default Detail