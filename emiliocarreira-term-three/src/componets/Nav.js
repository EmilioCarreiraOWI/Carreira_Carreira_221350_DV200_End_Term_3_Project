import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


function mainNav() {

    return(
        <Navbar class='mb-0' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Game cloud</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Landing Page</Nav.Link>
                    <Nav.Link href="/More">More Games</Nav.Link>
                    <Nav.Link href="/Library">Library</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default mainNav;