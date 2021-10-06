

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';
import styles from './PeopleNovigation.module.css';
const PeopleNovigation = ({
    getResurce,
    prevPage,
    nextPage,
    counterPage
}) => {

    const handleChangePrev =()=> getResurce(prevPage);
    const handleChangeNext =()=> getResurce(nextPage)
   
  return (
      <div className={styles.container}>
          <Link to={`/people/?page=${counterPage - 1}`}
              className={styles.buttons}>
              <UiButton
                  text="Previous"
                  onClick={handleChangePrev}
                  disabled={!prevPage}
                  />
            
          </Link>
          <Link to={`/people/?page=${counterPage + 1}`}
              className={styles.buttons}>
              <UiButton
                  text="Next"
                  onClick={handleChangeNext}
                  disabled={!nextPage} />
          </Link>
     
      </div>
  );
}


PeopleNovigation.propTypes = {
    getResurce: PropTypes.func,
    previos: PropTypes.string,
    next: PropTypes.string,
    counterPage:PropTypes.number
}
export default PeopleNovigation;