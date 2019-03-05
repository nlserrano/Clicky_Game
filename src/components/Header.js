import React from "react";

function Header (props) {
    return (
    <div>
        <div className="navbar-fixed">
            <nav className="black">
                <header className="center">SCORE: {props.score}/12</header>
            </nav>
        </div>
    </div>
    );
}

export default Header;