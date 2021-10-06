
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './SearchPageItem.module.css';


const SearchPageItem = ({people}) => {
  return (
      <>
          {people.length
              ? (
                  <ul className={styles.list__container}>
                      {people.map(({ name, img, id }) => (
                       
                          <li className={styles.list__item} key={id}>
                              <Link to={`/people/${id}`}>    
                              <img className={styles.item__img} src={img} alt={name} />
                              <p className={styles.item__name}>{name}</p>
                              </Link>
                              </li> 
                    ))}
                  </ul>
              )
              
              : <h2 className={styles.person__comment} style={{color:"white"}}>No results</h2>
          
          
          }
      </>
  );
}


SearchPageItem.propTypes = {
  people: PropTypes.array
}
export default SearchPageItem;