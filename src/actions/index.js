export const addBikePaths = bikePaths =>  ({
    type: 'ADD_BIKE_PATHS',
    bikePaths 
});

export const toggleFavorite = id => ({
    type: 'TOGGLE_FAVORITE',
    id
})