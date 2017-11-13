import expect from 'expect';
import courseReducer from './courseReducer';
import * as courseActions from '../actions/courseAction';

describe('course reducer',()=>{
    it('should add course when pass CREATE_COURSE_SUCCESS action',()=>{
        //arrange
        const initialState = [{title:'A'},{title:'B'}];
        const newCourse = {title: 'C'};
        const action = courseActions.createCourseSuccess(newCourse);

        //act
        const newState = courseReducer(initialState,action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });
    it('should update course when passed UPDATE_COURSE_SUCCESS action',()=>{
        //arrange
        const initialState = [
            {id:'A', title:'A'},
            {id:'B', title:'B'},
            {id:'C', title:'C'}
        ];

        const course = {id:'B', title:'New Title'};
        const action = courseActions.updateCourseSuccess(course);

        //act
        const newState = courseReducer(initialState,action);
        const updatedCourse = newState.find(a=>a.id==course.id);
        const untouchedCourse = newState.find(a=>a.id=='A');

        //assert
        expect(updatedCourse.title).toEqual(course.title);
        expect(untouchedCourse.title).toEqual('A');
        expect(newState.length).toEqual(3);
    });
});