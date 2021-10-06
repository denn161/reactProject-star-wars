
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import favoriteIcon from './img/bookmark.svg';
import styles from './Favorite.module.css';


const Favorite = () => {
    const [counter, setCounter] = useState();
    
    const storeData = useSelector(state => state.favoritereducer);
   
     
    useEffect(() => {
        // console.log(Object.keys(storeData));
        const length = Object.keys(storeData).length;
        
        length.toString().length > 2 ? setCounter('...') : setCounter(length);
             

    });
  return (
      <div className={styles.container}>
          <Link to="/favorites">
              <span className={styles.counter}>{counter}</span>
     <img className={styles.favorite} src={favoriteIcon} alt="IconFavorite" />
        </Link>        
    </div>
  );
}


export default Favorite;