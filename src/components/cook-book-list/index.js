import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipesRequestAction } from "../../actions";
import CookBookList from "./cookBookList";

const CookBookListContainer = ({
                                   getRecipesRequestAction,
                                   recipes,
                                   loading,
                                   error
                               }) => {
    useEffect(() => {
        getRecipesRequestAction();
    }, []);

    return (
        <CookBookList
            recipes={recipes}
            loading={loading}
            error={error}
        />
    )
};

const mapDispatchToProps = {
    getRecipesRequestAction
};

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookBookListContainer);