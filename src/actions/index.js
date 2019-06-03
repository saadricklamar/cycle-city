export const addBikePaths = bikePaths =>  ({
    type: 'ADD_BIKE_PATHS',
    bikePaths 
});

export const toggleFavorite = id => ({
    type: 'TOGGLE_FAVORITE',
    id
});

export const isLoading = bool => ({
    type: "IS_LOADING",
    bool
  });
  
export const hasErrored = bool => ({
    type: "HAS_ERRORED",
    bool
  });