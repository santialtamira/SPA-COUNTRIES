const initialState = {
    allCountries: [],
    
};

function rootReducer(state = initialState, action) {
    // if (action.type === "LOAD_ALL_DOGS") {
    //     return {
    //         ...state,
    //         allDogs: action.payload[0].concat(action.payload[1])
    //     }
    // }
    // if(action.type === "LOAD_ALL_TEMPERAMENTS"){
    //     return {
    //         ...state,
    //         temperaments: action.payload
    //     }
    // }
    // if(action.type === "GET_DOGS_BY_TEMPERAMENT"){
    //     return {
    //         ...state,
    //         allDogs: action.payload
    //     }
    // }
    // if (action.type === "LOAD_DOGS_BY_ORDER") {
    //     return {
    //         ...state,
    //         allDogs: action.payload.concat({})
    //     }
    // }
    return state;
}

export default rootReducer;