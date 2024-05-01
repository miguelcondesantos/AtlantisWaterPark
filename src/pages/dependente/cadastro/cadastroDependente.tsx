import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from "../../../navbar/navbar"
import "./cadastroDependente.css"


export default function CadastroDependente () {
    return (
        <>
            <NavBar/>
            <Container>
                <div className='cadastro'>
                    <h1>Cadastro do Dependente</h1> 
                    <Form className="form">
                        <Container>
                            <h3>Informações</h3>
                            <Row className='mb-3'>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Nome do Dependente</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder='Nome'
                                            name="name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Nome Social do Dependente</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder='Nome Social'
                                            name="name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data de Nascimento do Dependente</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="dataNascimento"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>

                        <Container>
                            <h3>Endereço</h3>
                            <Row className='mb-3'>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Rua</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder='Rua'
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
                                            placeholder='Bairro'
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
                                            placeholder='Cidade'
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
                                            placeholder='Estado'
                                            name="Estado"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>País</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder='País'
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
                                            placeholder='Código Postal'
                                            name="codigoPostal"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>

                        <Container>
                            <h3>A Qual Cliente o Dependente será Cadastrado ?</h3>
                            <Row className="mb-3">
                                <Col Col md={6}> 
                                    <Form.Group>
                                        <Form.Label>Id Cliente</Form.Label>
                                        <Form.Control
                                            required
                                            type='number'
                                            placeholder='Id Cliente'
                                            name="idCliente"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <Button className='botao' type="submit">Finalizar</Button>
                    </Form>  
                </div>
            </Container>
        </>
    )
}