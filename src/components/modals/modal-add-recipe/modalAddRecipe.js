import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./modalAddRecipe.css";

const ModalAddRecipe = ({ showModal, addRecipeClickHandler, handleClose }) => {
    const [titleRecipe, setTitleRecipe] = useState(null);
    const [IngredientsRecipe, setIngredientsRecipe] = useState(null);
    const [howToCookRecipe, setHowToCookRecipe] = useState(null);

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adding Recipes</Modal.Title>
            </Modal.Header>
            <form action=""></form>
            <Modal.Body className="modal_adding">
                <div>Enter new recipe</div>
                <Form.Control type="text" ref={setTitleRecipe} placeholder="Title"/>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter Ingredients</Form.Label>
                        <Form.Control ref={setIngredientsRecipe} as="textarea" rows="3"/>

                        <Form.Label>How To Cook</Form.Label>
                        <Form.Control ref={setHowToCookRecipe} as="textarea" rows="3"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="warning"
                    className="btn_add_in_modal"
                    onClick={() => addRecipeClickHandler(titleRecipe, IngredientsRecipe, howToCookRecipe)}
                >
                    Add Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalAddRecipe;