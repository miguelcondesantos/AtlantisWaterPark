import NavBar from "../../../navbar/navbar";
import { Container, Table, Button, Form } from 'react-bootstrap';
import "./listarCliente.css"

export default function ListarCliente() {
    return (
        <Container className="div"> 
            <NavBar />
            <h1>Lista de Clientes</h1>
            <Form className="mb-4">
                <Form.Group controlId="formBusca">
                    <Form.Control type="text" placeholder="Buscar cliente por nome" />
                </Form.Group>
            </Form>
            <Table striped bordered hover className="mb-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nome do Cliente</td>
                        <td>
                            <Button variant="primary" size="sm" className="me-2">Editar</Button>
                            <Button variant="danger" size="sm">Excluir</Button>
                        </td>
                    </tr>
                    
                </tbody>
            </Table>
        </Container>
    );
}
