


import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import UiInput from '@ui/UiInput';
import { getApiRecurse } from '@utils/network';
import { API_PERSON_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import SearchPageItem from '@components/SearchPage';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import { useCallback, useEffect, useState } from 'react';
import styles from './SearchPage.module.css';


const SearchPage = ({setErrorApi}) => {

    const [inputValue, setInputValue] = useState('');

    const [people, setPeople] = useState([]);

    const getResponse = async (params) => {
     

        const res = await getApiRecurse(API_PERSON_SEARCH + params);
        
        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);

                return {name,img, id}
            })
            setPeople(peopleList);
                     
            setErrorApi(false);
            
        } else {
            setErrorApi(true);
            
        }  
    }

    useEffect(() => {
        getResponse('');
        

    }, [])
    
    const debounceGetResponse = useCallback(
        debounce(value => getResponse(value), 500),
        []
    );
       
           


    

    const handleInputChange = (value) => {
        
        setInputValue(value);
        debounceGetResponse(value);
 
    }
  return (
      <>
          <h1 className="header__text">Search Acters</h1>
          <UiInput
              type="text"
              value={inputValue}
              handleInputChange={handleInputChange}
              placeholder='Input characters name'
              classes = {styles.input__search}
          />
          <SearchPageItem people={people}/>
         
      </>
  );
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(SearchPage);