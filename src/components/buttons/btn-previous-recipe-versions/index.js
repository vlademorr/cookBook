import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import { ModalPreviousRecipes } from "../../modals";
import "./btnPreviousRecipeVersions.css";

const BtnPreviousRecipeVersions = ({ id }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div onClick={(e)=>{e.stopPropagation()}}>
            <Button
                className="btn_inside_description btn_prev_recipes"
                onClick={handleShow}
                variant="outline-primary"
            >
                Prev. Recipes
            </Button>
            <ModalPreviousRecipes show={show} handleClose={handleClose} recipeId={id}/>
        </div>
    );
};

export default BtnPreviousRecipeVersions;
