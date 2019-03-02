import React from "react";

function CharacterCard(props) {
    return (
        <div className="card" onClick={props.imageClick}>
            <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../public/img/" + props.image)} />
            </div>
        </div>
    );
}

export default CharacterCard;