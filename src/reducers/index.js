const initialState = {
    recipes: [],
    prevRecipes: [],
    loading: true,
    error: null,
    loadingPrevRecipes: null,
    errorPrevRecipes: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_RECIPES_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_RECIPES_SUCCESS":
            return {
                ...state,
                recipes: action.payload,
                loading: false
            };
        case "FETCH_RECIPES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "CHANGE_RECIPE":
            const {id, recipe} = action.payload;
            const newData = [...state.recipes];
            const recipesIdx = state.recipes.findIndex(i => i._id === id);
            const item = newData[recipesIdx];
            newData.splice(recipesIdx, 1, {
                ...item,
                ...recipe
            });
            return {
                ...state,
                recipes: newData
            };
        case "FETCH_PREVIOUS_RECIPES_REQUEST":
            return {
                ...state,
                prevRecipes: [],
                loadingPrevRecipes: action.payload,
                errorPrevRecipes: null
            };
        case "FETCH_PREVIOUS_RECIPES_SUCCESS":
            return {
                ...state,
                prevRecipes: action.payload,
                loadingPrevRecipes: null
            };
        case "FETCH_PREVIOUS_RECIPES_FAILURE":
            return {
                ...state,
                loadingPrevRecipes: false,
                errorPrevRecipes: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
