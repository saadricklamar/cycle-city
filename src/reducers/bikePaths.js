export const bikePaths = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BIKE_PATHS':
            return [...action.bikePaths]
        case 'TOGGLE_FAVORITE':
            return
        default:
            return state;
    }
}


export default bikePaths;