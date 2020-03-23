import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPreviousRecipesOnServer } from "../../../actions";
import ModalPreviousRecipes from "./modalPreviousRecipes";

const ModalPreviousRecipesContainer = ({
                                  show,
                                  recipeId,
                                  handleClose,
                                  prevRecipes,
                                  loadingPrevRecipes,
                                  getPreviousRecipesOnServer
                              }) => {

    useEffect(() => {
        if (show) {
            getPreviousRecipesOnServer(recipeId);
        }
    }, [show]);

    return (
        <ModalPreviousRecipes
            show={show}
            handleClose={handleClose}
            loadingPrevRecipes={loadingPrevRecipes}
            prevRecipes={prevRecipes}
        />
    );
};

const mapStateToProps = state => {
    return {
        prevRecipes: state.prevRecipes,
        loadingPrevRecipes: state.loadingPrevRecipes
    };
};

const mapDispatchToProps = {
    getPreviousRecipesOnServer
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPreviousRecipesContainer);
