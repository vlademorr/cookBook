import React from "react";
import { Spinner as SpinnerBts } from "react-bootstrap";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <SpinnerBts animation="border" variant="success"/>
        </div>
    )
};

export default Spinner;