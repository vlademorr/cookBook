import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipesRequestAction } from "../../actions"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import CookBookListItem from "../cook-book-list-item";
import "./cookBookList.css";

const CookBookList = props => {
  const {
    getRecipes,
    recipes,
    loading,
    error
  } = props;

  useEffect(() => {
    getRecipes();
  }, []);

  const errorMessage = error ? <ErrorIndicator/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content =
          !recipes.length
          ? <h6>Add the recipe please :)</h6>
          : <>
              {recipes.map((recipe) => {
                return(
                    <CookBookListItem
                        key={recipe._id}
                        recipe={recipe}
                    />
                )
              })}
            </>;

  return(
      <>
        {errorMessage}
        {spinner}
        {!loading || recipes.length ? content : null}
      </>
  )
};

const mapDispatchToProps = (dispatch) => {
  return{
    getRecipes: () => dispatch(getRecipesRequestAction()(dispatch))
  }
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading,
    error: state.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookBookList);
