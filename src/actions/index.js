import CookBookService from "../services/cookBook-service";

const {
    updateRecipes,
    postNewRecipes,
    getPreviousRecipes,
    getRecipes
} = new CookBookService();

const getRecipesRequestAction = () => {
    return (dispatch) => {
        getRecipes()
            .then(({data}) => dispatch(getRecipesSuccessAction(data)))
            .catch(err => dispatch(getRecipesFailureAction(err)));
        dispatch({
            type: "FETCH_RECIPES_REQUEST"
        })
    };
};

const getRecipesSuccessAction = recipes => {
    return {
        type: "FETCH_RECIPES_SUCCESS",
        payload: recipes
    };
};

const getRecipesFailureAction = error => {
    return {
        type: "FETCH_RECIPES_FAILURE",
        payload: error
    };
};

const addNewRecipeOnServer = recipe => {
    const noText = "(the author of this recipe did not enter anything here)";
    const {title, ingredients, howToCook} = recipe;
    return (dispatch) => {
        postNewRecipes({
            title: title || noText,
            ingredients: ingredients || noText,
            howToCook: howToCook || noText
        }).then(() => {
            dispatch(getRecipesRequestAction());
            console.log("created successful");
        }).catch(err => {
            console.log(err);
        });
    }
};

const changeRecipeAction = (id, recipe) => {
    return {
        type: "CHANGE_RECIPE",
        payload: {id, recipe}
    };
};

const changeRecipeOnServer = (recipe, id) => {
    return (dispatch) => {
        updateRecipes(recipe, id)
            .then(() => {
                dispatch(changeRecipeAction(id, recipe));
                console.log("changed successful");
            })
            .catch(err => {
                console.log(err);
            });
    }
};

const getPreviousRecipesOnServer = parentId => {
    return (dispatch) => {
        dispatch(getPreviousRecipesRequestAction(parentId));
        getPreviousRecipes(parentId)
            .then(({data}) => {
                dispatch(getPreviousRecipesSuccessAction(data));
            })
            .catch(err => {
                dispatch(getPreviousRecipesFailureAction(err));
            });
    };
};

const getPreviousRecipesRequestAction = id => {
    return {
        type: "FETCH_PREVIOUS_RECIPES_REQUEST",
        payload: id
    };
};

const getPreviousRecipesSuccessAction = recipes => {
    return {
        type: "FETCH_PREVIOUS_RECIPES_SUCCESS",
        payload: recipes
    };
};

const getPreviousRecipesFailureAction = err => {
    return {
        type: "FETCH_PREVIOUS_RECIPES_FAILURE",
        payload: err
    };
};

export {
    getRecipesRequestAction,
    getRecipesSuccessAction,
    getRecipesFailureAction,
    addNewRecipeOnServer,
    changeRecipeOnServer,
    getPreviousRecipesOnServer
};
