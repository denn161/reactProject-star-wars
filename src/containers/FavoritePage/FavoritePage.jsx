
import { useEffect, useState } from 'react';
import PeopleList from '@components/PeoplePage/PeopleList';
import { useSelector } from 'react-redux';

import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoritereducer);

    useEffect(() => {
        const peopleArr = Object.entries(storeData);
     

        if (peopleArr.length) {
            const res = peopleArr.map((item) => {
                return {
                    id: item[0],
                     ...item[1]    
                }
            })

            setPeople(res);
          
            
        }

       
        

    }, []);
   
  return (
      <>
          <h1 className="header__text">Fvorites</h1>
          {people.length ? <PeopleList people={people} /> :<h2 className={styles.comment}>No Data</h2>  }
       
        
      </>
  );
}

export default FavoritePage;