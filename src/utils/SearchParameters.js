export function searchParametersEmpty(searchParameterMap){
    for(let [k,v] of searchParameterMap){
        if (!searchMapEmpty(v)) return false;
    }
    return true;
}

export function searchMapEmpty(searchMap){
    return searchMap.size <= 0;
}