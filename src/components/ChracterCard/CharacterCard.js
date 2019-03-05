import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
    return (
        <div className="card hoverable" onClick={props.imageClick}>
            <div className="img-container">
                <img alt={props.image.replace(".jpg", "")} src={require("../../../public/img/" + props.image)} />
            </div>
        </div>
    );
}

export default CharacterCard;