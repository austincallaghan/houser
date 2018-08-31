
// default state
const initialState = {
    placeholder:''
}

// define type
const UPDATE_PLACEHOLDER_TYPE = 'UPDATE_PLACEHOLDER_TYPE';


// reducer 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PLACEHOLDER_TYPE:
            return {...state, placeholder: action.payload};     
        case UPDATE_PLACEHOLDER_TYPE:
            return {...state, placeholder: action.payload};     
        default:
            return state;
    }
}
export function updatePlaceholderType( placeholderValue ) {
    console.log('console logs can go here to check this value of state')
    return {
        type: UPDATE_PLACEHOLDER_TYPE,
        payload: placeholderValue,
    }
}  
