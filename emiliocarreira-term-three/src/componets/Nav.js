import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/esm/Container";


function BasicNav() {

    return(
        <nav class="bg-dark navbar navbar-expand-lg navbar-light text-light p-2 pb-0">
            <Container>
                <svg width="42" height="43" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="73" fill="#E5E5E5"/>
                <g id="Group 31">
                <g id="Group 27">
                <rect id="Rectangle 333" x="-98" y="-31" width="1868.42" height="2494" fill="#1C1C1C"/>
                <g id="Rectangle 257">
                <mask id="path-2-inside-1_0_1" fill="white">
                <path d="M-98 -31H1770.42V101H-98V-31Z"/>
                </mask>
                <path d="M-98 -31H1770.42V101H-98V-31Z" fill="#212529"/>
                <path d="M1770.42 96H-98V106H1770.42V96Z" fill="white" mask="url(#path-2-inside-1_0_1)"/>
                </g>
                <g id="Group 26">
                <path id="Ellipse 70" d="M70.3261 36.5C70.3261 56.132 54.8457 72 35.8066 72C16.7675 72 1.28711 56.132 1.28711 36.5C1.28711 16.868 16.7675 1 35.8066 1C54.8457 1 70.3261 16.868 70.3261 36.5Z" fill="#A26337" stroke="white" stroke-width="2"/>
                <ellipse id="Ellipse 71" cx="26.3754" cy="36.8242" rx="19.1742" ry="13.5664" fill="#111111"/>
                <ellipse id="Ellipse 72" cx="18.8619" cy="13.242" rx="18.8619" ry="13.242" transform="matrix(0.998004 0.0631493 -0.0598145 0.99821 26.8906 26.6133)" fill="#111111"/>
                <ellipse id="Ellipse 73" cx="38.0071" cy="27.7782" rx="11.9446" ry="12.2743" fill="#111111"/>
                <rect id="Rectangle 313" x="26.6914" y="31.6562" width="17.6026" height="6.46018" fill="#D9D9D9"/>
                <ellipse id="Ellipse 74" cx="4.41435" cy="6.76313" rx="4.41435" ry="6.76313" transform="matrix(0.939728 0.341923 -0.325771 0.945449 26.6973 28.4258)" fill="#D9D9D9"/>
                <ellipse id="Ellipse 75" cx="4.41222" cy="6.76625" rx="4.41222" ry="6.76625" transform="matrix(0.949307 -0.31435 0.299218 0.954185 36.1191 31.1992)" fill="#D9D9D9"/>
                <ellipse id="Ellipse 76" cx="31.4056" cy="35.8533" rx="1.57166" ry="1.61504" fill="#111111"/>
                <ellipse id="Ellipse 77" cx="38.9506" cy="35.8533" rx="1.57166" ry="1.61504" fill="#111111"/>
                </g>
                </g>
                </g>
                </svg>
            <a class="headings p-2" href="./"><h2>GAME CLOUD</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto headings">
                        <li class="nav-item">
                            <a class="nav-link" href="./">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./More.js">More Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Library.js">Librery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Cart.js">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./Indevidual.js"></a>
                        </li>
                        
                    </ul>
                    
                </div>
                <div>
                    <ul className="navbar-nav ml-auto headings justify-content-end">
                       <li class="nav-item">
                            <a class="nav-link" href="./Login.js">Login</a>
                        </li> 
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default BasicNav;