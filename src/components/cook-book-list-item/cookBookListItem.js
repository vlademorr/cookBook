import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap'
import { BtnChangeRecipe, BtnPreviousRecipeVersions } from "../buttons";
import moment from "moment";
import './cookBookListItem.css';

const CookBookListItem = ({ recipe }) => {
  const { title, ingredients, howToCook, createdAt, _id } = recipe;
  const [ChangeColor, setChangeColor] = useState(null);
  const recipeDate = moment(createdAt).fromNow();


  function titleColor() {
    !ChangeColor ? setChangeColor("#CCFFCC") : setChangeColor(null);
  }

  return (
    <Accordion defaultActiveKey="1" className="accordion">
      <Card>
        <Accordion.Toggle
          onClick={titleColor}
          style={{ backgroundColor: ChangeColor }}
          as={Card.Header}
          eventKey="0"
          className="accordion_toggle"
        >
          <p>{title}</p>
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
            <div className="buttons_inside">
              <BtnChangeRecipe recipe={recipe}/>
              <BtnPreviousRecipeVersions id={_id}/>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default React.memo(CookBookListItem);
