import React from "react";
import CookBookList from "../cook-book-list";
import { BtnAddRecipes } from "../buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
    return (
        <>
            <div className="header">
                <h1>CookBook</h1>
                <BtnAddRecipes/>
            </div>
            <div className="header_bottom">
                <h2>Recipes</h2>
            </div>
            <div className="cookbook_list">
                <CookBookList/>
            </div>
        </>
    );
};

export default App;