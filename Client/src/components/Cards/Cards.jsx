import Card from '../Card/Card';
import styles from "../Cards/Cards.module.css"


function Cards({characters, onClose}) {

   

   return (
      <div className={styles.cardContainer}>
        {characters.map(({ id, name, status, gender, image, species, origin }) => (
          <div className={styles.cardWrapper}>
            <Card
              key={id}
              id={id}
              image={image}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              onClose={onClose}
            />
          </div>
        ))}
      </div>
    );
}


export default Cards
