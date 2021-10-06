
import { useHistory } from 'react-router-dom';
import IconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const history = useHistory();

    const handleGoBack = (event) => {
        event.preventDefault();
        history.goBack();
        console.log("hello back");
        


    }
  return (
      <a
          href="#"
          onClick={handleGoBack}
          className={styles.link}>
          <img className={styles.icon__img} src={IconBack} alt="Go Back" />
         <span>Go Back</span>
      </a>
  );
}

export default PersonLinkBack;