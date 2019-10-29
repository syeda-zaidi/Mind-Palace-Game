import React from "react";
import "./style.css";

function Cards(props) {
    return (
    
            <div className="image-card"
                onClick={() => props.setClicked(props.id)} >

                <img
                    className="image"
                    alt={props.name}
                    src={props.image} />
            
        </div>
    )
}

export default Cards;