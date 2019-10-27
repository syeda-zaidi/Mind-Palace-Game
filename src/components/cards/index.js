import React from "react";
import "./style.css";


function Cards(props) {
    return (

        <div className="row">

            <div className="card-container">
                <div className="img-container">

                    <img alt={props.name} src={props.image} />

                </div>
            </div>
        </div>

            )
        }
        
export default Cards;