import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const ModalChangeRecipe = ({show, handleClose, changeRecipeClickHandler, handleChangeRecipes, recipes }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Changing Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Change recipe</div>
                    <Form.Control
                        value={recipes.title}
                        onChange={handleChangeRecipes}
                        type="text"
                        name="title"
                        placeholder="Title"
                    />
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter Ingredients:</Form.Label>
                            <Form.Control
                                value={recipes.ingredients}
                                name="ingredients"
                                onChange={handleChangeRecipes}
                                as="textarea"
                                rows="3"
                            />

                            <Form.Label>How To Cook</Form.Label>
                            <Form.Control
                                value={recipes.howToCook}
                                onChange={handleChangeRecipes}
                                name="howToCook"
                                as="textarea"
                                rows="3"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="outline-primary"
                        onClick={changeRecipeClickHandler}
                    >
                        Change Recipe
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalChangeRecipe;
