import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { getPreviousRecipesOnServer } from "../../../actions";
import { connect } from "react-redux";

const BtnPreviousRecipeVersions = ({
  prevRecipeDispatch,
  id
}) => {
  function getPrevRecipes() {
    prevRecipeDispatch(id);
  }

  return (
    <>
      <ButtonToolbar>
        <Button onClick={getPrevRecipes} variant="outline-primary">
          Prev. Recipes
        </Button>
      </ButtonToolbar>
    </>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    prevRecipeDispatch: id => getPreviousRecipesOnServer(id)(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BtnPreviousRecipeVersions);
