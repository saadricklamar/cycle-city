const bikePaths = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BIKE_PATHS':
            console.log(state)
            return [...action.bikePaths]
        default:
            return state;
    }
}


export default bikePaths;