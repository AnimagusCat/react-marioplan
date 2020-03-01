import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
//combineReducers is a function from redux library that will combine both the reducers into one

//combineReducers takes in an object as its function parameters. State the reducers you want to combine as the keys
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer