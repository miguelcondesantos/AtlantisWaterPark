import NavBar from "../../../navbar/navbar";
import { Container, Card, CardBody } from 'react-bootstrap';
import "./acomodacoes.css";

export default function Acomodacoes() {
    return (
        <>
            <NavBar />
            <Container className="aaaa">
                <h1>Acomodações</h1>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Acomodação simples para solteiro(a)</Card.Title>
                        <Card.Text>
                            <p>Quantidade de leitos para solteiros: 1</p>
                            <p>Quantidade de leitos para casais: 0</p>
                            <p>Climatização: sim</p>
                            <p>Quantidade de garagens disponíveis: 0</p>
                            <p>Quantidade de suítes: 1</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Acomodação simples para casal</Card.Title>
                        <Card.Text>
                            <p>Quantidade de leitos para solteiros: 0</p>
                            <p>Quantidade de leitos para casais: 1</p>
                            <p>Climatização: sim</p>
                            <p>Quantidade de garagens disponíveis: 1</p>
                            <p>Quantidade de suítes: 1</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <CardBody>
                        <Card.Title>Acomodação para família com até duas crianças</Card.Title>
                        <Card.Text>
                            <p>Quantidade de leitos para solteiros: 2</p>
                            <p>Quantidade de leitos para casais: 1</p>
                            <p>Climatização: sim</p>
                            <p>Quantidade de garagens disponíveis: 1</p>
                            <p>Quantidade de suítes: 1</p>
                        </Card.Text>
                    </CardBody>
                </Card>

                <Card className="mb-4">
                    <CardBody>
                        <Card.Title>Acomodação para família com até cinco crianças</Card.Title>
                        <Card.Text>
                            <p>Quantidade de leitos para solteiros: 5</p>
                            <p>Quantidade de leitos para casais: 1</p>
                            <p>Climatização: sim</p>
                            <p>Quantidade de garagens disponíveis: 2</p>
                            <p>Quantidade de suítes: 2</p>
                        </Card.Text>
                    </CardBody>
                </Card>

                <Card className="mb-4">
                    <CardBody>
                        <Card.Title>Acomodação para até duas familias, casal e três crianças cada</Card.Title>
                        <Card.Text>
                            <p>Quantidade de leitos para solteiros: 6</p>
                            <p>Quantidade de leitos para casais: 2</p>
                            <p>Climatização: sim</p>
                            <p>Quantidade de garagens disponíveis: 2</p>
                            <p>Quantidade de suítes: 3</p>
                        </Card.Text>
                    </CardBody>
                </Card>

                <Card className="mb-4">
                    <CardBody>
                        <Card.Title>Acomodação com garagem para solteiro(a)</Card.Title>
                        <Card.Text>
                            <p>Quantidade de leitos para solteiros: 0</p>
                            <p>Quantidade de leitos para casais: 1</p>
                            <p>Climatização: sim</p>
                            <p>Quantidade de garagens disponíveis: 1</p>
                            <p>Quantidade de suítes: 1</p>
                        </Card.Text>
                    </CardBody>
                </Card>

            </Container>
        </>
    );
}
