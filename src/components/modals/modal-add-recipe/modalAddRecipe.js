import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addNewRecipeOnServer } from "../../../actions";

const ModalAddRecipe = ({showModal, addRecipe, handleClose}) => {
    const [titleRecipe, setTitleRecipe] = useState(null);
    const [IngredientsRecipe, setIngredientsRecipe] = useState(null);
    const [howToCookRecipe, setHowToCookRecipe] = useState(null);

    function addRecipeClickHandler() {
        handleClose();
        addRecipe(
            titleRecipe.value,
            IngredientsRecipe.value,
            howToCookRecipe.value
        );
    }


    return(
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Adding Recipes</Modal.Title>
            </Modal.Header>
            <form action=""></form>
            <Modal.Body className="modal_adding">
                <div>Enter new recipe</div>
                <Form.Control type="text" ref={setTitleRecipe} placeholder="Title" />
                <Form>
                    <Form.Group>
                        <Form.Label>Enter Ingredients</Form.Label>
                        <Form.Control ref={setIngredientsRecipe} as="textarea" rows="3" />

                        <Form.Label>How To Cook</Form.Label>
                        <Form.Control ref={setHowToCookRecipe} as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={addRecipeClickHandler}>
                    Add Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    )
};


const mapDispatchToProps = dispatch => {
    return {
        addRecipe: (title, ingredients, howToCook) =>
            addNewRecipeOnServer({
                title,
                ingredients,
                howToCook
            })(dispatch)
    };
};

export default connect(null, mapDispatchToProps)(ModalAddRecipe);