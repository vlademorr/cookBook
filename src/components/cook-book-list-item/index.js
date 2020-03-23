import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import moment from "moment";
import { BtnChangeRecipe, BtnPreviousRecipeVersions } from "../buttons";
import './cookBookListItem.css';

const CookBookListItem = ({ recipe }) => {
    const {title, ingredients, howToCook, createdAt, _id} = recipe;
    const [ChangeColor, setChangeColor] = useState(null);
    const recipeDate = moment(createdAt).fromNow();

    function titleColor() {
        !ChangeColor ? setChangeColor("#bbbbbb") : setChangeColor(null);
    }

    return (
        <Accordion defaultActiveKey="1" className="accordion">
            <Card>
                <Accordion.Toggle
                    onClick={titleColor}
                    style={{backgroundColor: ChangeColor}}
                    as={Card.Header}
                    eventKey="0"
                    className="accordion_toggle"
                >
                    <BtnChangeRecipe recipe={recipe}/>
                    <p>{title}</p>
                    <BtnPreviousRecipeVersions id={_id}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="card_body">
                        <b>Ingredients:</b>
                        <br/>
                        {ingredients}
                        <br/>
                        <b>How To Cook:</b>
                        <br/>
                        {howToCook}
                        <br/>
                        <b>Date of creation</b>
                        <br/>
                        {recipeDate}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default React.memo(CookBookListItem);
