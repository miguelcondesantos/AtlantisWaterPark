import React, { ChangeEvent, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from "../../../navbar/navbar";
import "./cadastroDependente.css";
import Dependente from '../../../interfaces/interfaceDependente';

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export default function CadastroCliente() {
    const [dependente, setDependente] = useState<Dependente>({
        nome: '',
        nomeSocial: '',
        dataNascimento: '',
        endereco: [{
            rua: '',
            bairro: '',
            cidade: '',
            estado: '',
            pais: '',
            codigoPostal: ''
        }],
    });
    const [idCliente, setIdCliente] = useState('');

    const handleChange = (e: ChangeEvent<FormControlElement>) => {
        const { name, value } = e.target;
        setDependente(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEnderecoChange = (index: number, e: ChangeEvent<FormControlElement>) => {
        const { name, value } = e.target;
        const updatedEnderecos = dependente.endereco.map((endereco, idx) => {
            if (idx !== index) return endereco;
            return {
                ...endereco,
                [name]: value
            };
        });
    
        setDependente(prevState => ({
            ...prevState,
            endereco: updatedEnderecos
        }));
    };

    const adicionarEndereco = () => {

        const ultimoCampo = dependente.endereco[dependente.endereco.length -1]

        if (!ultimoCampo || ultimoCampo.bairro.trim() === '' || ultimoCampo.cidade.trim() === '' || ultimoCampo.codigoPostal.trim() === '' ||
            ultimoCampo.estado.trim() === '' || ultimoCampo.pais.trim() === '' || ultimoCampo.rua.trim() === ''){
            alert("Por favor, preencha todos os campos de Endereço antes de adicionar um novo.")
            return
        }

        setDependente({
            ...dependente,
            endereco: [...dependente.endereco, {
                rua: '',
                bairro: '',
                cidade: '',
                estado: '',
                pais: '',
                codigoPostal: ''
        }]
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!dependente.nome || !dependente.nomeSocial || !dependente.dataNascimento || !dependente.endereco.every(endereco => endereco.rua && endereco.bairro && endereco.cidade && endereco.estado && endereco.pais && endereco.codigoPostal)){
            alert('Por favor, preencha todos os campos.')
            return;
        }

        const verificaCliente = await fetch(`http://localhost:5000/clientes/${idCliente}`);
        if (!verificaCliente.ok) {
            alert('O ID do cliente não existe.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/clientes/${idCliente}/cadastroDependente`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dependente)
            });
            
            await response.json();

            if (response.ok) {
                alert("Dependente cadastrado com sucesso!")
                setDependente({
                    nome: '',
                    nomeSocial: '',
                    dataNascimento: '',
                    endereco: [{
                        rua: '',
                        bairro: '',
                        cidade: '',
                        estado: '',
                        pais: '',
                        codigoPostal: ''
                    }],
                });
                setIdCliente('');
            } else {
                alert('Falha ao cadastrar o dependente.')
            }
        } catch (error) {
            console.log('Erro:', error);
            
        }
    };

       
        return (
            <>
                <NavBar/>
                <Container>
                    <div className='cadastro'>
                        <h1>Cadastro do Dependente</h1> 
                        <Form className="form" onSubmit={handleSubmit}>
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
                                                name="nome"
                                                value={dependente.nome}
                                                onChange={handleChange}
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
                                                name="nomeSocial"
                                                value={dependente.nomeSocial}
                                                onChange={handleChange}
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
                                                value={dependente.dataNascimento}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
    
                            <Container>
                                <h3>Endereço</h3>
                                {dependente.endereco.map((endereco, index) => (
                                    <Row className='mb-3' key={index}>
                                    <Col md={6}>
                                        <Form.Group>
                                        <Form.Label>Rua</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder='Rua'
                                                name="rua"
                                                value={endereco.rua}
                                                onChange={(e) => handleEnderecoChange(index, e)}
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
                                                value={endereco.bairro}
                                                onChange={(e) => handleEnderecoChange(index, e)}
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
                                                value={endereco.cidade}
                                                onChange={(e) => handleEnderecoChange(index, e)}
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
                                                name="estado"
                                                value={endereco.estado}
                                                onChange={(e) => handleEnderecoChange(index, e)}
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
                                                value={endereco.pais}
                                                onChange={(e) => handleEnderecoChange(index, e)}
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
                                                value={endereco.codigoPostal}
                                                onChange={(e) => handleEnderecoChange(index, e)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                ))}
                                <Button className="botao" variant="secondary" onClick={adicionarEndereco}>Adicionar Endereço</Button>
                            </Container>
    
                            <Container>
                                <h3>ID do Cliente</h3>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>ID do Cliente</Form.Label>
                                            <Form.Control
                                                required
                                                type='text'
                                                placeholder='ID do Cliente'
                                                name="idCliente"
                                                value={idCliente}
                                                onChange={(e) => setIdCliente(e.target.value)}
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
 
    