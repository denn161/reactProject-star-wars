// import { HTTPS, HTTP } from "@constants/api";

// export const changeUrl = url => {
//     const result = url ? url.replace(HTTP, HTTPS) : url;
//     return result;
// }

/**
 * Функция деалает запрос на указанный url
 * @param {string} url - url для запроса 
 * @returns {Promise} - с результатом запроса 
 */
export const getApiRecurse = async (url) => {  
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Could not fetch.', res.status)
            return false;
        }
        return await res.json();      
        
    } catch (error) {
        console.log('Could not fetch.', error.message);
        return false;
        
    }
}

// getApiRecurse(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body.results))
         
    // (async () => {
    // const body = await getApiRecurse(SWAPI_ROOT + SWAPI_PEOPLE);
    // console.log(body);



    // })();
    
// export const getApiRecurse = (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body.results))
//         .catch(err=>console.error(err.message))

// }

// getApiRecurse(SWAPI_ROOT + SWAPI_PEOPLE)


export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json());
    }))

    return res;


}