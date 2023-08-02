import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './game_cloud_logo.jpg';

function BasicNav() {

    return(
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
            <Logo /> SpaceX
                <a class="navbar-brand headings" href="./">Game Cloud</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/More.js">More Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../pages/Library.js">Librery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default BasicNav;