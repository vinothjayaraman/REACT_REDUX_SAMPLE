import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseAction';

describe('store integration test', ()=>{
    it('should handle creating courses', ()=>{
        //arrange
        const store = createStore(rootReducer,initialState);
        const course = {id:'A', title:'Clean Code'};
        
        //act
        const createActionA = courseActions.createCourseSuccess(course);
        const createActionB = courseActions.createCourseSuccess({id:'B', title:'Clean Code B'});
        const updateAction = courseActions.updateCourseSuccess({id:'A', title:'Clean Code A'});
        store.dispatch(createActionA);
        store.dispatch(createActionB);
        store.dispatch(updateAction);
        //assert
        const actual = store.getState().courses;
        expect(actual.length).toEqual(2);
        expect(actual.find(a=>a.id=='A').title).toEqual('Clean Code A');
        expect(actual.find(a=>a.id=='B').title).toEqual('Clean Code B');
    });
});
