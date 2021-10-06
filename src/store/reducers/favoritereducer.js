import { REMOVE_PERSON_FROM_FAVORITE, ADD_PERSON_TO_FAVORITE } from "@store/CONSTANTS/constants";
import { getLocalStorage } from '@utils/localStorage';

import { omit } from "lodash";

 
const initialState = getLocalStorage('store');


const favoritereducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:            
            return {
                ...state,
                ...action.payLoad,
            };
        case REMOVE_PERSON_FROM_FAVORITE:            
            return omit(state,[action.payLoad]);
    
        default:
            return state;
    }
}

export default favoritereducer;