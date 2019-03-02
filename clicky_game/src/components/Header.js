import React from "react";

const jumbotronStyle = {
    paddingBottom: '100px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

function Header (props) {
    return (
    <div>
        <nav>
            <div className="nav-wrapper">
                {/* <a href="" className="brand-logo">Clicky Game!</a> */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>Clicky Game! (MGS Edition)</li>
                    <li>Score: {props.score}</li>
                </ul>
            </div>
        </nav>

        <div className="card-panel grey lighten-2 center" style={jumbotronStyle}>
            <div className="container">
                <h1>Clicky Game!</h1>
                <h5>Click on an image to earn points, but don't click on any more than once! Or else...</h5>
            </div>
        </div>
    </div>
    );
}

export default Header;