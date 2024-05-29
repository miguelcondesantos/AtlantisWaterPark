import React, { useState, useEffect } from 'react';
import NavBar from "../../../navbar/navbar";
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import "./listarCliente.css";
import Cliente from '../../../interfaces/interfaceCliente';

export default function ListarCliente() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
    const [modalShow, setModalShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        fetch('http://localhost:5000/clientes')
            .then(response => response.json())
            .then(data => setClientes(data))
            .catch(error => console.error('Erro:', error));
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:5000/deleteCliente/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setClientes(clientes.filter(cliente => cliente._id !== id));
            } else {
                console.error('Falha ao excluir cliente.');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    const handleEdit = async (id: string) => {

        try {
            const response = await fetch(`http://localhost:5000/clientes/${id}`);
            if (response.ok) {
                const cliente: Cliente = await response.json();
                setClienteSelecionado(cliente);
                setModalShow(true);
            } else {
                console.error('Falha ao obter cliente.');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    const handleCloseModal = () => {
        setModalShow(false);
        setClienteSelecionado(null);
    };

    const handleSaveChanges = async () => {
        try {
            console.log('Cliente selecionado para atualização:', clienteSelecionado);
    
            if (!clienteSelecionado || Object.keys(clienteSelecionado).length === 0) {
                console.error('Erro: clienteSelecionado vazio ou indefinido.');
                return;
            }
    
            const response = await fetch(`http://localhost:5000/atualizarCliente/${clienteSelecionado?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clienteSelecionado),
            });
    
            console.log('Resposta da API:', response);
    
            if (response.ok) {
                const updatedClientes = clientes.map(cliente => {
                    if (cliente._id === clienteSelecionado?._id) {
                        return clienteSelecionado;
                    } else {
                        return cliente;
                    }
                });
                setClientes(updatedClientes);
                setModalShow(false);
                setClienteSelecionado(null);
            } else {
                console.error('Falha ao salvar as alterações. Detalhes:', await response.text());
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };
    
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <NavBar />
            <Container className="div">
                <h1>Lista de Clientes</h1>
                <Form className="mb-4">
                    <Form.Group controlId="formBusca">
                        <Form.Control 
                            type="text" 
                            placeholder="Buscar cliente por nome" 
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Form.Group>
                </Form>
                <Table striped bordered hover className="mb-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes
                            .filter(cliente => cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()))
                            .map(cliente => (
                                <tr key={cliente._id}>
                                    <td>{cliente._id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>
                                        <Button variant="primary" size="sm" className="me-2" onClick={() => handleEdit(cliente._id)}>Editar</Button>
                                        <Button variant="danger" size="sm" onClick={() => handleDelete(cliente._id)}>Excluir</Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                {clienteSelecionado && (
                    <Modal show={modalShow} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Label><b>Informações</b></Form.Label>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clienteSelecionado.nome}
                                    onChange={(e) => setClienteSelecionado({...clienteSelecionado, nome: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nome Social</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clienteSelecionado.nomeSocial}
                                    onChange={(e) => setClienteSelecionado({...clienteSelecionado, nomeSocial: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={clienteSelecionado.dataNascimento}
                                    onChange={(e) => setClienteSelecionado({...clienteSelecionado, dataNascimento: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Telefones</Form.Label>
                                {clienteSelecionado.telefones.map((telefone, index) => (
                                    <Form.Control
                                        key={index}
                                        type="text"
                                        value={telefone.numero}
                                        onChange={(e) => {
                                            const newTelefones = [...clienteSelecionado.telefones];
                                            newTelefones[index].numero = e.target.value;
                                            setClienteSelecionado({...clienteSelecionado, telefones: newTelefones});
                                        }}
                                        className="mb-2"
                                    />
                                ))}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><b>Endereços</b></Form.Label>
                                {clienteSelecionado.enderecos.map((endereco, index) => (
                                    <div key={index} className="mb-2">
                                        <Form.Label>Rua</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.rua}
                                            onChange={(e) => {
                                                const newEnderecos = [...clienteSelecionado.enderecos];
                                                newEnderecos[index].rua = e.target.value;
                                                setClienteSelecionado({...clienteSelecionado, enderecos: newEnderecos});
                                            }}
                                            placeholder="Rua"
                                        />
                                        <Form.Label>Bairro</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.bairro}
                                            onChange={(e) => {
                                                const newEnderecos = [...clienteSelecionado.enderecos];
                                                newEnderecos[index].bairro = e.target.value;
                                                setClienteSelecionado({...clienteSelecionado, enderecos: newEnderecos});
                                            }}
                                            placeholder="Bairro"
                                        />
                                        <Form.Label>Cidade</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.cidade}
                                            onChange={(e) => {
                                                const newEnderecos = [...clienteSelecionado.enderecos];
                                                newEnderecos[index].cidade = e.target.value;
                                                setClienteSelecionado({...clienteSelecionado, enderecos: newEnderecos});
                                            }}
                                            placeholder="Cidade"
                                        />
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.estado}
                                            onChange={(e) => {
                                                const newEnderecos = [...clienteSelecionado.enderecos];
                                                newEnderecos[index].estado = e.target.value;
                                                setClienteSelecionado({...clienteSelecionado, enderecos: newEnderecos});
                                            }}
                                            placeholder="Estado"
                                        />
                                        <Form.Label>País</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.pais}
                                            onChange={(e) => {
                                                const newEnderecos = [...clienteSelecionado.enderecos];
                                                newEnderecos[index].pais = e.target.value;
                                                setClienteSelecionado({...clienteSelecionado, enderecos: newEnderecos});
                                            }}
                                            placeholder="País"
                                        />
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.codigoPostal}
                                            onChange={(e) => {
                                                const newEnderecos = [...clienteSelecionado.enderecos];
                                                newEnderecos[index].codigoPostal = e.target.value;
                                                setClienteSelecionado({...clienteSelecionado, enderecos: newEnderecos});
                                            }}
                                            placeholder="Código Postal"
                                        />
                                    </div>
                                ))}
                            </Form.Group>
                            
                            <Form.Label><b>Documentos</b></Form.Label>
                            <Form.Group>
                                <Form.Label>RG</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clienteSelecionado.rg}
                                    onChange={(e) => setClienteSelecionado({...clienteSelecionado, rg: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clienteSelecionado.cpf}
                                    onChange={(e) => setClienteSelecionado({...clienteSelecionado, cpf: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Passaporte</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clienteSelecionado.passaporte}
                                    onChange={(e) => setClienteSelecionado({...clienteSelecionado, passaporte: e.target.value})}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={handleSaveChanges}>
                            Salvar Alterações
                        </Button>
                    </Modal.Footer>
                </Modal>
                )}
            </Container>
        </>
    );
}