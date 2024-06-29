import { Container, Table, Button, Form } from 'react-bootstrap';
import "./listarDependente.css";
import NavBar from '../../../navbar/navbar';

export default function ListarDependente() {
    const dependentes = [
        { id: 1, nome: 'Dependente 1', nomeCliente: "Cliente 1"},
        { id: 2, nome: 'Dependente 2', nomeCliente: "Cliente 1" },
        { id: 3, nome: 'Dependente 3', nomeCliente: "Cliente 2" },
    ];

    return (
        <Container className="div">
            <NavBar />
            <h1>Lista de Dependentes</h1>
            <Form className="mb-4">
                <Form.Group controlId="formBusca">
                    <Form.Control type="text" placeholder="Buscar dependente por nome" />
                </Form.Group>
            </Form>
            <Table striped bordered hover className="mb-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cliente</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {dependentes.map(dependente => (
                        <tr>
                            <td>{dependente.id}</td>
                            <td>{dependente.nome}</td>
                            <td>{dependente.nomeCliente}</td> 
                            <td>
                                <Button variant="primary" size="sm" className="me-2">Editar</Button>
                                <Button variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
