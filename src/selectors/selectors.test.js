import expect from 'expect';
import {loadAuthorsToSelect} from './selectors';

describe('Author selectors',()=>{
    describe('loadAuthorsToSelect test',()=>{
        it('should return author data formatted for dropdown',()=>{
            const authors=[
                {id:'cory-house', firstName : 'Cory', lastName:'House'},
                {id:'vinoth-jayaraman', firstName : 'Vinoth', lastName:'Jayaraman'}
            ];
            const expected = [
                {value:'cory-house', text:'Cory House'},
                {value:'vinoth-jayaraman', text:'Vinoth Jayaraman'}
            ];

            expect(loadAuthorsToSelect(authors)).toEqual(expected);
        });
    });
});