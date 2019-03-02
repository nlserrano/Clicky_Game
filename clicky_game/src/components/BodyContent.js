import React from "react";

const jumbotronStyle = {
    paddingBottom: '100px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

function BodyContent () {
    return (
    <div>
        <div className="card-panel lighten-2 center" style={jumbotronStyle}>
            <div className="container">
                <p>Images here</p>
            </div>
        </div>
    </div>
    );
}

export default BodyContent;