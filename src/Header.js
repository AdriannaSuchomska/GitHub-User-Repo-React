import React from "react";
import './sass/header.scss'

function Header() {
    return (
        <div id='header'>
            <p className="popout">
            <span>GitHub </span>
            &nbsp;
            <span>User</span>
            &nbsp;
            <span>Repo</span>
            </p>
        </div>
    )
}

export default Header