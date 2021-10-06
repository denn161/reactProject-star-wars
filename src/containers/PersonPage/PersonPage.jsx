import React, { useEffect, useState,Suspense } from 'react';

import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { useSelector } from 'react-redux';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
 import UiLoading from '@ui/UiLoading';
import { getApiRecurse } from '@utils/network';
import { getPeopleImg } from '@services/getPeopleData';  
import { API_PERSON } from '@constants/api';
import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = useState(null);   
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector(state => state.favoritereducer);
 

    useEffect(() => {

        (async () => {
          const id = match.params.id;
          const res = await getApiRecurse(`${API_PERSON}/${id}/`);

          storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
          setPersonId(id);
       
         if (res) {
            setErrorApi(false);
            setPersonInfo([
              { title: 'Height', data: res.height },
              { title: 'Mass', data: res.mass },
              { title: 'Hair Color', data: res.hair_color },
              { title: 'Skin Color', data: res.skin_color },
              { title: 'Eye Color', data: res.eye_color },
              { title: 'Birth Year', data: res.birth_year },
              { title: 'Gender', data: res.gender }            
            ]);
            setPersonName(res.name);
            setPersonPhoto(getPeopleImg(id));
           res.films.length && setPersonFilms(res.films);
           
          } else {
            setErrorApi(true)
            }
             
        })();

    }, []);

  return (
    <>      
      <PersonLinkBack />
     
      <div className={styles.wrapper}> 

        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto}
                       personName={personName}
                       personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading
              theme="white"
              isShadow/>}>
           <PersonFilms personFilms={personFilms} />
            </Suspense>
         )}
        </div>     
     
      </div>
      </>
  );
}
PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match:PropTypes.object
}
export default withErrorApi(PersonPage) ;