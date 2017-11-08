import expect from 'expect';
import {shallow, mount} from 'enzyme';
import React from 'react';
import {ManageCoursePage} from './ManageCoursePage';

describe('ManageCoursePage container component test',()=>{
    it('sets error message when trying to save empty title',()=>{
        const props = {
            authors: [],
            actions: {saveCourse:()=>{return Promise.resolve();}},
            course : {id: '' , title: '', watchHref: '', authorId: '', length: '', category: ''}
        };
        const wrapper = mount(<ManageCoursePage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be atleast 5 characters.');
    });
});