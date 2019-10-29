import React from "react";
import "./style.css";

function Nav(props) {
    return (

        <div className="navbar navbar-dark bg-dark">

            <div className="navbar-brand"> Clicky Game </div>
            <div className="header-message"> {props.message} </div>
            <div className="header-items">
                <p> Score : {props.score} </p>
                <p> Top Score : {props.topScore} </p>
            </div>
        </div>

    )
};

export default Nav;