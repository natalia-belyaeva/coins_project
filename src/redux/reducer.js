import types from './types.js';

let initialState = {
    filter: {
        name: null,
        country: null,
        composition: null,
        quality: null,
        catalog: null,
    }   
}

export default function reducer(state= initialState, action) {
    if (action.type === types.addIdToState) {
        console.log(action)
        return {
            ...state,
            filter: {
                ...state.filter,
                catalog: action.payload.id
            }
        }
    }
}