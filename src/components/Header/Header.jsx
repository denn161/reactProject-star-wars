
import { NavLink } from 'react-router-dom';
import Favorite from '@components/Favorite';
import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgStation from './img/space-station.svg';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvaider';

import styles from './Header.module.css'; 
import { useEffect, useState } from 'react';

const Header = () => {
  const [icon, setIcon] = useState(imgStation);

  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgLightsaber);        
        break;
      case THEME_DARK:
        setIcon(imgStation);
        break;
      case THEME_NEITRAL:
        setIcon(imgDroid);
        break;
    
      default:
       setIcon(imgLightsaber);       
    }

  },[isTheme])
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars"/>
          <ul className={styles.list}>
              <li className={styles.list__item}><NavLink to="/" exact>Home</NavLink></li>
        <li className={styles.list__item}><NavLink to="/people/?page=1" >People</NavLink></li>
        <li className={styles.list__item}><NavLink to="/search" >Search</NavLink></li>
        <li className={styles.list__item}><NavLink to="/found" exact>Not Found</NavLink></li>
        <li className={styles.list__item}><NavLink to="/fail" exact>Fail</NavLink></li>

      
                
      </ul>
      <Favorite/>
   

        
        

      </div>
  );
}



export default Header;