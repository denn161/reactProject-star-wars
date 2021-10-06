
import { REMOVE_PERSON_FROM_FAVORITE, ADD_PERSON_TO_FAVORITE } from "@store/CONSTANTS/constants";

export const addPersonToFavorite = (person) => ({
    type: ADD_PERSON_TO_FAVORITE,
    payLoad:person

})

// export const addPersonToFavorite = (person) => {
//     console.log(person);
//     return {       
//     type: ADD_PERSON_TO_FAVORITE,
//     payLoad:person
//     }
// }

export const removePersonFromFevorite = (personId) => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payLoad:personId

})