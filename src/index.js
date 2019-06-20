import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux'

const store = createStore(appReducer, initialState);


console.log("initial state", store.getState());

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort" : "ณ เชียงใหม่",
        "date" : "2016-06-30",
        "powder" : false,
        "backcountry" : true
    }
});

console.log("next state", store.getState());

