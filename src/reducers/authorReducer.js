import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function authorReducers(state = InitialState.authors, action){
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}