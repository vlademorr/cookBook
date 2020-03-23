import React from "react";
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import CookBookListItem from "../cook-book-list-item";
import "./cookBookList.css";

const CookBookList = ({
                          recipes,
                          loading,
                          error
                      }) => {
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content =
        !recipes.length
        ? <h6>Add the recipe please :)</h6>
        : <>
            {recipes.map((recipe) => {
                return (
                    <CookBookListItem
                        key={recipe._id}
                        recipe={recipe}
                    />
                )
            })}
        </>;
    return (
        <>
            {errorMessage}
            {spinner}
            {!loading || recipes.length ? content : null}
        </>
    )
};

export default CookBookList;