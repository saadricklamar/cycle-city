export const bikePaths = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BIKE_PATHS':
            return [...action.bikePaths]
        case 'TOGGLE_FAVORITE':
            return  state.filter(path => {
                if(path.id === action.id) {
                    path.favorited = true;
                }
            })
        default:
            return state;
    }
}

export default bikePaths;