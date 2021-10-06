
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPersonToFavorite, removePersonFromFevorite } from '@store/actions';
import favoriteStart from './img/favorite.svg';
import favoriteFill from './img/favorite-fill.svg'
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite }) => {
  const dispatch = useDispatch();
  
  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFevorite(personId));
      setPersonFavorite(false)
          
    } else {
      dispatch(addPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }

      }));
      setPersonFavorite(true)    

        }
  }

  return (
    <>
    <div className={styles.container}> 
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img src={personFavorite
          ? favoriteFill : favoriteStart} alt="FavoriteIcon"
          onClick={dispatchFavoritePeople}
          className={styles.favorite} />
      </div>
    
     
    </>
  );
}


PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite:PropTypes.func
}
export default PersonPhoto;