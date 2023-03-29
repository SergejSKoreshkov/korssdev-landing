// eslint-disable-next-line no-use-before-define
import * as React from 'react'

import {
    HashRouter,
    Route,
    Routes
} from 'react-router-dom'
import { Home } from '../views/Home'
import { Navbar, Container, Nav } from 'react-bootstrap'

export class App extends React.Component<{}, {}> {
    public render (): JSX.Element | null {
        return <div>
            <HashRouter>
                <Container>
                    <Navbar bg="transparent" expand="lg" className="mt-4 mb-4">
                        <Navbar.Brand href="#">Korss Dev</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                                <Nav.Link href="#cv">CV</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </HashRouter>
        </div>
    }
}
