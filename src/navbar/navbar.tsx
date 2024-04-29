import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

import './navbar.css'

export default function NavBar() {
    return (
        <>
            <Navbar className='navBar' expand="lg" fixed='top'>
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" /> 
                    <Navbar.Collapse id="navbarScroll" className="flex-row-reverse">              
                        <Nav className='nav' navbarScroll>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <NavDropdown title="Cliente" id="cliente-dropdown">
                                <NavDropdown.Item href='/cadastroCliente'>Cadastrar</NavDropdown.Item>
                                <NavDropdown.Item href='/listarCliente'>Listar</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Dependente" id="dependente-dropdown">
                                <NavDropdown.Item href=''>Cadastrar</NavDropdown.Item>
                                <NavDropdown.Item href=''>Lista</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Hospedagem" id="hospedagem-dropdown">
                                <NavDropdown.Item href="">Acomodações</NavDropdown.Item>
                                <NavDropdown.Item href="">Realizar Hospedagem</NavDropdown.Item>
                                <NavDropdown.Item href="">Listar Hópedes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

