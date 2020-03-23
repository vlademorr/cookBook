import React from "react";
import ModalAddRecipe from "./modalAddRecipe";
import {addNewRecipeOnServer} from "../../../actions";
import {connect} from "react-redux";
const ModalAddRecipeContainer = ({ showModal, handleClose, addNewRecipeOnServer }) => {

    function addRecipeClickHandler(titleRecipe, IngredientsRecipe, howToCookRecipe) {
        handleClose();
        addNewRecipeOnServer(
            {
                title: titleRecipe.value,
                ingredients: IngredientsRecipe.value,
                howToCook: howToCookRecipe.value
            }
        )
    }

    return (
        <ModalAddRecipe
            showModal={showModal}
            handleClose={handleClose}
            addNewRecipeOnServer={addNewRecipeOnServer}
            addRecipeClickHandler={addRecipeClickHandler}
        />
    )
};

const mapDispatchToProps = {
    addNewRecipeOnServer
};

export default connect(null, mapDispatchToProps)(ModalAddRecipeContainer);