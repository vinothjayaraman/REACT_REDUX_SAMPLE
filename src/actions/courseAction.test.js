import expect from 'expect';
import React from 'react';
import * as types from './actionTypes';
import * as courseActions from './courseAction';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('course actions',()=>{
    describe('create course action',()=>{
        it('should create CREATE_COURSE_SUCCESS action', ()=>{
            // arrange
            const course = {id: 'clean code', title:'clean code test'};
            const expectedAction = { type: types.CREATE_COURSE_SUCCESS, course: course};
            //act
            const action = courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe('Async actions',()=>{
    afterEach(()=>{
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses',(done)=>{
        //arrange
        // sample nock (node mocking API)
        // nock('http://example.com/')
        // .get('/courses')
        // .reply(200,{body:{courses:[{id:'A', title:'A'},{id:'B', title:'B'}]}});

        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body:{courses:[{id:'clean-code', title:'clean code'}]}}
        ];
        //act
        const store = mockStore({courses:[]},expectedActions);
        //assert
        store.dispatch(courseActions.loadCourses()).then(()=>{
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
