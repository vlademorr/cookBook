import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalAddRecipe } from "../../modals"
import "./btnAddRecipes.css";

const BtnAddRecipes = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button className="btn_add" variant="warning" onClick={handleShow}>
                Add Recipe
            </Button>
            <ModalAddRecipe showModal={show} handleClose={handleClose}/>
        </>
    );
};

export default BtnAddRecipes
