import React from "react";
import "./Jumbotron.css";

const jumbotronStyle = {
    paddingTop: '40px',
    paddingBottom: '20px',
    marginBottom: '0px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}


function Jumbotron () {
    return (
    <div>
        <div className="card-panel grey lighten-1 center" style={jumbotronStyle}>
            <div className="jumboT">
                <h1>CLICKY GAME!</h1>
                <h3 className="red-text">METAL GEAR SOLID EDITION</h3>
                <div className="divider"></div>
                <h5 className="section">Click on an image to earn points, but don't click on any more than once!</h5>
            </div>
        </div>
    </div>
    );
}

export default Jumbotron;