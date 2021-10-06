import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';


import blackLoading from './img/loader-black.svg';
import blueLoading from './img/loader-blue.svg';
import whiteLoading from './img/loader-white.svg';

import styles from './UiLoading.module.css';

const UiLoading = ({
    theme = "white",
    isShadow = true,
    classes
}) => {
    
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'black':
             setLoaderIcon(blackLoading)                
                break;
            case 'white':
                setLoaderIcon(whiteLoading)
                break;
            case 'blue':
                setLoaderIcon(blueLoading)
                break;        
            default:
                setLoaderIcon(whiteLoading)
                break;
        }
        

    },[])
  return (
      
      <>
          <img className={cn(styles.loader, isShadow && styles.shadow,classes)} src={loaderIcon} alt="Loader" />
      </>
  );
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}


export default UiLoading;