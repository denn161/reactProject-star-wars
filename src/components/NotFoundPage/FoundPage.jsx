import { useLocation } from 'react-router-dom';
import img from './img/not-found.jpg'
import styles from './FoundPage.module.css';

const FoundPage = () => {
  let location = useLocation()
  return (
      <div className={styles.found__block}>
      <img src={img} alt="Not Found" className={styles.img} />
      <p className={styles.text}>No math for <u>{location.pathname}</u></p>
      </div>
  );
}


export default FoundPage;