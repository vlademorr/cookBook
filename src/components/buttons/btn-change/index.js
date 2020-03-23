import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalChangeRecipe } from "../../modals/";
import "./btnChange.css";

const BtnChangeRecipe = ({ recipe }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    return (
        <div onClick={(e)=>{e.stopPropagation()}}>
            <Button
                onClick={handleShow}
                className="btn_inside_description"
                variant="outline-primary"
            >
                Change
            </Button>
            <ModalChangeRecipe show={show} handleClose={handleClose} recipe={recipe}/>
        </div>
    );
};

export default BtnChangeRecipe;
