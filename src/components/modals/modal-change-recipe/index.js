import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeRecipeOnServer } from "../../../actions";
import ModalChangeRecipe from "./modalChangeRecipe";

const ModalChangeRecipeContainer = ({show, handleClose, recipe, changeRecipeOnServer}) => {
    const {title, ingredients, howToCook, _id} = recipe;
    const [recipes, setRecipes] = useState({title, ingredients, howToCook});

    useEffect(() => {
        setRecipes({title, ingredients, howToCook});
    }, [_id]);


    function changeRecipeClickHandler() {
        handleClose();
        changeRecipeOnServer(
            {
                title: recipes.title,
                ingredients: recipes.ingredients,
                howToCook: recipes.howToCook
            },
            _id);
    }

    function handleChangeRecipes({target}) {
        setRecipes({...recipes, [target.name]: target.value});
    }

    return (
        <ModalChangeRecipe
            show={show}
            handleClose={handleClose}
            changeRecipeClickHandler={changeRecipeClickHandler}
            handleChangeRecipes={handleChangeRecipes}
            recipes={recipes}
        />
    );
};

const mapDispatchToProps = {
    changeRecipeOnServer
};

export default connect(null, mapDispatchToProps)(ModalChangeRecipeContainer);
