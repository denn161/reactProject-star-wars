

import cn from 'classnames';
import '../index.css';
import cancelImg from './img/cancel.svg';
import styles from './UiInput.module.css';



import PropTypes from 'prop-types';


const UiInput = ({
    type,
    value,
    handleInputChange,
    placeholder,
    classes
}) => (
      <div className={cn(styles.wrapper__input,classes)}>
     <input className={styles.input} type={type}
            value={value}
            onChange={(e)=>handleInputChange(e.target.value)}
            placeholder={placeholder} />
        <img
             onClick={()=> value && handleInputChange("")}
            className={cn(styles.clear__img,!value && styles.clear__disabled)}
            src={cancelImg} alt="Clear Img" />
    
      </div>
  );



UiInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes:PropTypes.string
}
export default UiInput;