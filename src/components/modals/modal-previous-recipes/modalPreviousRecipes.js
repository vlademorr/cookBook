import React from "react";
import { Accordion, Button, Card, Modal, Spinner } from "react-bootstrap";
import moment from "moment";
import "./modalPreviousRecipes.css"

const ModalPreviousRecipes = ({
                                  show,
                                  handleClose,
                                  loadingPrevRecipes,
                                  prevRecipes,
                              }) => {

    return (
        <Modal
            show={show}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Previous Recipes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loadingPrevRecipes ? <Spinner animation="border"/> : null}
                {
                    !prevRecipes.length
                    ? <p><b>Nothing found.</b> <br/> Modify the recipe to see previous versions</p>
                    : null
                }

                {prevRecipes.map(({title, ingredients, howToCook, createdAt, _id}) => {
                    const recipeDate = moment(createdAt).fromNow();

                    return (
                        <Accordion
                            defaultActiveKey="1"
                            className="modal_accordion"
                            key={_id}
                        >
                            <Card>
                                <Card.Header className="modal_card_header">
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey={_id}
                                        className="modal_accordion_toggle"
                                    >
                                        {title}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={_id}>
                                    <Card.Body className="modal_card_body">
                                        <p><b>Ingredients:</b></p>
                                        <p>{ingredients}</p>
                                        <p><b>HowToCook:</b></p>
                                        <p>{howToCook}</p>
                                        <p><b>Date of creation:</b></p>
                                        <p>{recipeDate}</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    );
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalPreviousRecipes;
