import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNovigation from '@components/PeoplePage/PeopleNovigation/';
import { getApiRecurse } from '@utils/network';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';
import styles from './PeoplePage.module.css';
import { useQueryParams } from '@hooks/useQueryParams';

const PeoplePage = ({setErrorApi}) => { 
  const [people, setPeople] = useState(null)
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)
  const [counterPage, setCounterPage] = useState(1)
  
  const query = useQueryParams();

  const queryPage = query.get('page');

  const getResurce = async (url) => {
    const res = await getApiRecurse(url);
 
     if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return { id, name, img }

      })
      setPeople(peopleList);
      setPrevPage(res.previous);
      setNextPage(res.next);
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
      
    } else {
      setErrorApi(true);
    }
 
  }  
  useEffect(() => {
    getResurce(API_PEOPLE+queryPage);
    

  },[])

  return (
    <>
      <PeopleNovigation
        getResurce={getResurce}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}/>
     {people && <PeopleList people={people} />}   
     
    </>
  );
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);








