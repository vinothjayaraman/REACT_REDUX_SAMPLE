import * as types from './actionTypes';
import AuthorAPI from '../api/mockAuthorApi';

export function loadAuthorSuccess(authors){
    return{type : types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return dispatch => {
        return AuthorAPI.getAllAuthors().then(authors=>{
            dispatch(loadAuthorSuccess(authors));
        }).catch(error=>{
            throw(error);
        });
    };
}