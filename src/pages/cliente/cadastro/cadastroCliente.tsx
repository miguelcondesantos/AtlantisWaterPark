import NavBar from "../../../navbar/navbar";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./cadastroCliente.css"

export default function CadastroCliente() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="cadastro"> 
                    <h1>Cadastro do Cliente</h1>

                    <Form className="form">
                        <Container>
                            <h3>Informações</h3>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Nome do Cliente</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nome"
                                            name="nome"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Nome Social do Cliente</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nome social"
                                            name="nomeSocial"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data de nascimento do Cliente</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="dataNascimento"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Telefone</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Telefone"
                                            name="telefone"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>

                        <Container>
                            <h3>Endereço</h3>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Rua</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Rua"
                                            name="rua"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Bairro</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Bairro"
                                            name="bairro"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Cidade</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Cidade"
                                            name="cidade"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Estado"
                                            name="estado"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>País</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="País"
                                            name="pais"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Código Postal"
                                            name="codigoPostal"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        
                        <Container>
                            <h3>Documentos</h3>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Registro Geral</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="RG"
                                            name="rg"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Cadastro de Pessoa Física</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="CPF"
                                            name="cpf"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Passaporte</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Passaporte"
                                            name="passaporte"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Button className="botao" type="submit">Salvar!</Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}
