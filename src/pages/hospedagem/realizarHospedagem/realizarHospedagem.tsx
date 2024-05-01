import NavBar from "../../../navbar/navbar";
import { Container, Button, Form } from 'react-bootstrap';
import "./realizarHospedagem.css";

export default function RealizarHospedagem() {
    return (
        <>
            <NavBar />
            <Container className="cadastroAAA">
                <h1>Realizar Hospedagem</h1>

                <Form className="formAAA">
                    <Form.Group controlId="clienteSelect">
                        <Form.Label>Selecione o Cliente</Form.Label>
                        <Form.Control as="select" className="selectAAA">
                            <option disabled selected> Selecione o Cliente</option>
                            <option>Cliente 1</option>
                            <option>Cliente 2</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="acomodacaoSelect">
                        <Form.Label> Selecione a Acomodação</Form.Label>
                        <Form.Control as="select" className="selectAAA">
                            <option disabled selected> Selecione a Acomodação</option>
                            <option>Acomodação simples para solteiro(a)</option>
                            <option>Acomodação simples para casal</option>
                            <option>Acomodação para família com até duas crianças</option>
                        </Form.Control>
                    </Form.Group>

                    <Button className="botaoAAA" type="submit">Finalizar Hospedagem</Button>
                </Form>
            </Container>
        </>
    );
}
