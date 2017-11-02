import * as types from './actionTypes';
import AuthorAPI from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorSuccess(authors){
    return{type : types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorAPI.getAllAuthors().then(authors=>{
            dispatch(loadAuthorSuccess(authors));
        }).catch(error=>{
            throw(error);
        });
    };
}