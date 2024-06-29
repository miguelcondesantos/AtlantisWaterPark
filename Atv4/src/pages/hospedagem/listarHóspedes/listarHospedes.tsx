import NavBar from "../../../navbar/navbar";
import { Container, Card, ListGroup, Form } from 'react-bootstrap';
import "./listarHospedes.css";

export default function ListarHospedes() {
    return (
        <>
            <NavBar />
            <Container className="container-geral">
                <h1>Listar Hospedes por Acomodação</h1>

                <div className="acomodacao-container">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Acomodação simples para solteiro(a)</Card.Title>
                            <Form.Control type="text" placeholder="Pesquisar hóspede" className="mb-3" />
                            <ListGroup className="list-group" variant="flush">
                                <ListGroup.Item>Cliente 1</ListGroup.Item>
                                <ListGroup.Item>Cliente 2</ListGroup.Item>
                                <ListGroup.Item>Cliente 3</ListGroup.Item>
                                <ListGroup.Item>Cliente 4</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>

                <div className="acomodacao-container">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Acomodação simples para casal</Card.Title>
                            <Form.Control type="text" placeholder="Pesquisar hóspede" className="mb-3" />
                            <ListGroup className="list-group" variant="flush">
                                <ListGroup.Item>Cliente 5</ListGroup.Item>
                                <ListGroup.Item>Cliente 6</ListGroup.Item>
                                <ListGroup.Item>Cliente 7</ListGroup.Item>
                                <ListGroup.Item>Cliente 8</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>

                <div className="acomodacao-container">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Acomodação para família com até duas crianças</Card.Title>
                            <Form.Control type="text" placeholder="Pesquisar hóspede" className="mb-3" />
                            <ListGroup className="list-group" variant="flush">
                                <ListGroup.Item>Cliente 9</ListGroup.Item>
                                <ListGroup.Item>Cliente 10</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>

                <div className="acomodacao-container">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Acomodação para família com até cinco crianças</Card.Title>
                            <Form.Control type="text" placeholder="Pesquisar hóspede" className="mb-3" />
                            <ListGroup className="list-group" variant="flush">
                                <ListGroup.Item>Cliente 11</ListGroup.Item>
                                <ListGroup.Item>Cliente 12</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>

                <div className="acomodacao-container">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Acomodação para até duas famílias, casal e três crianças cada</Card.Title>
                            <Form.Control type="text" placeholder="Pesquisar hóspede" className="mb-3" />
                            <ListGroup className="list-group" variant="flush">
                                <ListGroup.Item>Cliente 13</ListGroup.Item>
                                <ListGroup.Item>Cliente 14</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>

                <div className="acomodacao-container">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Acomodação com garagem para solteiro(a)</Card.Title>
                            <Form.Control type="text" placeholder="Pesquisar hóspede" className="mb-3" />
                            <ListGroup className="list-group" variant="flush">
                                <ListGroup.Item>Cliente 15</ListGroup.Item>
                                <ListGroup.Item>Cliente 16</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
}
