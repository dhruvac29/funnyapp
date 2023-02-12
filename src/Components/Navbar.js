import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from "react-router-dom";
import Notification from "../Notification";

function Photo() {
    return null;
}

function Entertext() {
    return null;
}

function Calculator() {
    return null;
}

function ColorSchemesExample() {
    return (<>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Funny</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/notification">Notification</a>
                            <a className="nav-link" href="/photo">Photo</a>
                            <a className="nav-link" href="/entertext">Entertext</a>
                            <a className="nav-link" href="/calculator">Calculator</a>
                            <a className="nav-link" href="/logout">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>




{/*//           <Navbar bg="dark" variant="dark">*/}
{/*//                         <Container>*/}
{/*//                             <Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
{/*//                             <Nav className="me-auto">*/}
{/*//                                 <Nav.Link as={Link} to={"/notification"}>Notification</Nav.Link>*/}
{/*//                                 <Nav.Link as={Link} to={"/photo"}>Photo</Nav.Link>*/}
{/*//                                 <Nav.Link as={Link} to={"/photo"}>Enter Text</Nav.Link>*/}
{/*//                                 <Nav.Link as={Link} to={"/entertext"}>Calculator</Nav.Link>*/}
{/*//                             </Nav>*/}
{/*//                         </Container>*/}
{/*//                     </Navbar>*/}
</>



    );
}

export default ColorSchemesExample;