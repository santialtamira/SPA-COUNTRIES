const initialState = {
    allCountries: [],
    detail: {},
    activities: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === "LOAD_ALL_COUNTRIES") {
        return {
            ...state,
            allCountries: action.payload
        }
    }
    if(action.type === "LOAD_COUNTRIES_BY_NAME"){
        return {
            ...state,
            allCountries: action.payload
        }
    }
    if(action.type === "LOAD_COUNTRIES_BY_CONTINENT"){
        return {
            ...state,
            allCountries: action.payload
        }
    }
    if (action.type === "LOAD_COUNTRY_DETAIL") {
        return {
            ...state,
            detail: action.payload
        }
    }
    if(action.type === "LOAD_COUNTRIES_BY_ACTIVITY"){
        return {
            ...state,
            allCountries: action.payload
        }
    }
    if(action.type === "LOAD_ALL_ACTIVITIES"){
        return {
            ...state,
            activities: action.payload
        }
    }
    if (action.type === "LOAD_COUNTRIES_BY_ORDER") {
        return {
            ...state,
            allCountries: action.payload
        }
    }
    return state;
}

export default rootReducer;

