import React, { useState, ChangeEvent } from 'react';
import NavBar from "../../../navbar/navbar";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./cadastroCliente.css";
import Cliente from '../../../interfaces/interfaceCliente';

type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export default function CadastroCliente() {
    const [cliente, setCliente] = useState<Cliente>({
        _id: '',
        nome: '',
        nomeSocial: '',
        dataNascimento: '',
        telefones: [{ numero: '' }],
        enderecos: [{
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: '',
        codigoPostal: ''
        }],
        rg: '',
        cpf: '',
        passaporte: '',
        dependente:[],
    });

    const handleChange = (e: ChangeEvent<FormControlElement>) => {
        const { name, value } = e.target;

        setCliente({
            ...cliente,
            [name]: value
        });
    };

    const handleTelefoneChange = (index: number, e: ChangeEvent<FormControlElement>) => {
        const { value } = e.target;
        const telefones = [...cliente.telefones];
        
        telefones[index] = { numero: value };
            setCliente({
            ...cliente,
            telefones
        });
    };

    const handleEnderecoChange = (index: number, e: ChangeEvent<FormControlElement>) => {
        const { name, value } = e.target;
        const enderecos = [...cliente.enderecos];

        enderecos[index] = {
            ...enderecos[index],
            [name]: value
        };

        setCliente({
            ...cliente,
            enderecos
        });
    };

    const adicionarTelefone = () => {

        const ultimoCampo = cliente.telefones[cliente.telefones.length -1]

        if (!ultimoCampo || ultimoCampo.numero.trim() === '') {
            alert("Por favor, preencha o campo antes de adicionar um novo telefone.");
            return
        }

        setCliente({
            ...cliente,
            telefones: [...cliente.telefones, { numero: '' }]
        });
    };


    const adicionarEndereco = () => {

        const ultimoCampo = cliente.enderecos[cliente.enderecos.length -1]

        if (!ultimoCampo || ultimoCampo.bairro.trim() === '' || ultimoCampo.cidade.trim() === '' || ultimoCampo.codigoPostal.trim() === '' ||
            ultimoCampo.estado.trim() === '' || ultimoCampo.pais.trim() === '' || ultimoCampo.rua.trim() === ''){
            alert("Por favor, preencha todos os campos de Endereço antes de adicionar um novo.")
            return
        }

        setCliente({
            ...cliente,
            enderecos: [...cliente.enderecos, {
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

        if (!cliente.nome || !cliente.nomeSocial || !cliente.dataNascimento || !cliente.telefones.every(tel => tel.numero) || 
            !cliente.enderecos.every(endereco => endereco.rua && endereco.bairro && endereco.cidade && endereco.estado && endereco.pais && endereco.codigoPostal) || 
            !cliente.rg || !cliente.cpf || !cliente.passaporte) {
            console.log('Pelo menos um campo está vazio:', cliente);
            alert('Por favor, preencha todos os campos.');
            return;
        }


        if (!cliente.telefones.every(tel => /^\d+$/.test(tel.numero))) {
            alert('Por favor, preencha o campo Telefone apenas com números.');
            return;
        }

        if (!/^\d+$/.test(cliente.rg) || !/^\d+$/.test(cliente.cpf)) {
            alert('Por favor, preencha o campo de RG e CPF apenas com números.');
            return;
        }

        try {
        const response = await fetch('http://localhost:5000/cadastroCliente', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        await response.json();

        if (response.ok) {
            alert('Cliente cadastrado com sucesso!');
            setCliente({
                _id: '',
                nome: '',
                nomeSocial: '',
                dataNascimento: '',
                telefones: [{ numero: '' }],
                enderecos: [{
                    rua: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    pais: '',
                    codigoPostal: ''
                }],
                rg: '',
                cpf: '',
                passaporte: '',
                dependente: [],
            });
        } else {
            alert('Falha ao cadastrar cliente. Documento já existe.');
        }
        } catch (error) {
        console.error('Erro:', error);
        }
    };

    return (
        <>
        <NavBar />
        <Container>
            <div className="cadastro">
            <h1>Cadastro do Cliente</h1>

            <Form className="form" onSubmit={handleSubmit}>
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
                        value={cliente.nome}
                        onChange={handleChange}
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
                        value={cliente.nomeSocial}
                        onChange={handleChange}
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
                        value={cliente.dataNascimento}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    </Col>
                    <Col md={12}>
                    <Form.Group>
                        <Form.Label>Telefones</Form.Label>
                            {cliente.telefones.map((telefone, index) => (
                                <Form.Control
                                    key={index}
                                    required
                                    type="text"
                                    placeholder="Telefone"
                                    value={telefone.numero}
                                    onChange={(e) => handleTelefoneChange(index, e)}
                                    className="mb-2"
                                />
                            ))}
                        <Button className="botao" variant="secondary" onClick={adicionarTelefone}>Adicionar Telefone</Button>
                    </Form.Group>
                    </Col>
                </Row>
                </Container>

                <Container>
                <h3>Endereço</h3>
                {cliente.enderecos.map((endereco, index) => (
                    <Row className="mb-3" key={index}>
                    <Col md={6}>
                        <Form.Group>
                        <Form.Label>Rua</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Rua"
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
                            placeholder="Bairro"
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
                            placeholder="Cidade"
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
                            placeholder="Estado"
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
                            placeholder="País"
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
                            placeholder="Código Postal"
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
                        value={cliente.rg}
                        onChange={handleChange}
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
                        value={cliente.cpf}
                        onChange={handleChange}
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
                        value={cliente.passaporte}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    </Col>
                </Row>
                </Container>
                <Button className="botao" type="submit">Finalizar</Button>
            </Form>
            </div>
        </Container>
        </>
    );
}
