import { CHANGE_SEARCHFIELD } from './constants';
const initialState  = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case: CHANGE_SEARCHFIELD : // case cos nie działa do poprawy
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state
    }
}