export function loadAllCountries(payload){
    return { type: "LOAD_ALL_COUNTRIES", payload }
}

///////////////////////////////////////////////////////

export function loadFilteredCountriesByName(payload){
    return { type: "LOAD_COUNTRIES_BY_NAME", payload }
}

//////////////////////////////////////////////////////

export function loadFilteredCountriesByContinent(payload){
    return { type: "LOAD_COUNTRIES_BY_CONTINENT", payload }
}

///////////////////////////////////////////////////////

export function loadCountryDetail(payload){
    return { type: "LOAD_COUNTRY_DETAIL", payload }
}

///////////////////////////////////////////////////////7

export function loadFilteredCountriesByActivity(payload){
    return { type: "LOAD_COUNTRIES_BY_ACTIVITY", payload }
}

/////////////////////////////////////////////////////////////

export function loadAllActivities(payload){
    return { type: "LOAD_ALL_ACTIVITIES", payload }
}

///////////////////////////////////////////////////////////

export function loadCountriesByOrder(pepe){
    // const result = words.filter(word => word.length > 6);
    const payload = pepe.filter(elem => Object.keys(elem).length !== 0);
    return { type: "LOAD_COUNTRIES_BY_ORDER", payload }
}

