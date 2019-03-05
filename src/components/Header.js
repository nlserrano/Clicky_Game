import React from "react";

const jumbotronStyle = {
    paddingTop: '10px',
    paddingBottom: '50px',
    marginBottom: '0px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

const headerStyles = {
}


function Header (props) {
    return (
    <div>
        <div className="navbar-fixed">
            <nav>
                <header style={headerStyles} className="center">SCORE: {props.score}/12</header>
            </nav>
        </div>

        <div className="card-panel grey lighten-2 center" style={jumbotronStyle}>
            <div className="container">
                <h1>Clicky Game! (MGS Edition)</h1>
                <h5>Click on an image to earn points, but don't click on any more than once!</h5>
            </div>
        </div>
    </div>
    );
}

export default Header;