import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import NavBar from '../../../navbar/navbar';
import Dependente from '../../../interfaces/interfaceDependente';
import Cliente from '../../../interfaces/interfaceCliente';

export default function ListarDependentes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [dependenteSelecionado, setDependenteSelecionado] = useState<Dependente | null>(null);
    const [modalShow, setModalShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        fetch('http://localhost:5000/clientes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na rede');
                }
                return response.json();
            })
            .then(data => {
                console.log('Dados recebidos da API:', data);
                setClientes(data);
            })
            .catch(error => console.error('Erro:', error));
    }, []);

    const handleShowModal = (dependente: Dependente) => {
        setDependenteSelecionado(dependente);
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
        setDependenteSelecionado(null);
    };

    const handleDelete = async (id: string) => {
        fetch(`http://localhost:5000/deleteDependente/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                setClientes(clientes.map(cliente => ({
                    ...cliente,
                    dependentes: cliente.dependentes.filter(dependente => dependente._id !== id)
                })));
            } else {
                throw new Error('Erro ao excluir dependente');
            }
        })
        .catch(error => console.error('Erro:', error));
    };

    const handleSaveChanges = async () => {
        try {
            if (!dependenteSelecionado) {
                console.error('Erro: dependenteSelecionado vazio ou indefinido.')
                return; 
            }
    
            const response = await fetch(`http://localhost:5000/editarDependente/${dependenteSelecionado._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dependenteSelecionado),
            });
    
            if (response.ok) {
                setClientes(clientes.map(cliente => {
                    const updatedDependentes = cliente.dependentes.map(dependente => {
                        if (dependente && dependente._id === dependenteSelecionado._id) {
                            return dependenteSelecionado;
                        }
                        return dependente || null;
                    });
    
                    return {
                        ...cliente,
                        dependentes: updatedDependentes,
                    };
                }));
                handleCloseModal();
            } else {
                throw new Error('Erro ao salvar alterações');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };
    
    

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container className="div">
            <NavBar />
            <h1>Lista de Dependentes</h1>
            <Form className="mb-4">
                <Form.Group controlId="formBusca">
                    <Form.Control 
                        type="text" 
                        placeholder="Buscar dependente por nome" 
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
                        <th>Cliente</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.flatMap((cliente, clienteIndex) =>
                        (cliente.dependentes || [])
                        .filter(dependente => dependente.nome.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((dependente, dependenteIndex) => (
                            <tr key={`${clienteIndex}-${dependenteIndex}`}>
                                <td>{dependente._id}</td>
                                <td>{dependente.nome}</td>
                                <td>{cliente.nome}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleShowModal(dependente)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(dependente._id)}
                                    >
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>

            {dependenteSelecionado && (
                <Modal show={modalShow} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalhes do Dependente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={dependenteSelecionado.nome}
                                    onChange={(e) => setDependenteSelecionado({...dependenteSelecionado, nome: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nome Social</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={dependenteSelecionado.nomeSocial}
                                    onChange={(e) => setDependenteSelecionado({...dependenteSelecionado, nomeSocial: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={dependenteSelecionado.dataNascimento}
                                    onChange={(e) => setDependenteSelecionado({...dependenteSelecionado, dataNascimento: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Endereços</Form.Label>
                                {dependenteSelecionado.endereco?.map((endereco, index) => (
                                    <div key={index} className="mb-2">
                                        <Form.Label>Rua</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.rua}
                                            onChange={(e) => {
                                                const newEnderecos = [...dependenteSelecionado.endereco];
                                                newEnderecos[index].rua = e.target.value;
                                                setDependenteSelecionado({...dependenteSelecionado, endereco: newEnderecos});
                                            }}
                                        />
                                        <Form.Label>Bairro</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.bairro}
                                            onChange={(e) => {
                                                const newEnderecos = [...dependenteSelecionado.endereco];
                                                newEnderecos[index].bairro = e.target.value;
                                                setDependenteSelecionado({...dependenteSelecionado, endereco: newEnderecos});
                                            }}
                                        />
                                        <Form.Label>Cidade</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.cidade}
                                            onChange={(e) => {
                                                const newEnderecos = [...dependenteSelecionado.endereco];
                                                newEnderecos[index].cidade = e.target.value;
                                                setDependenteSelecionado({...dependenteSelecionado, endereco: newEnderecos});
                                            }}
                                        />
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.estado}
                                            onChange={(e) => {
                                                const newEnderecos = [...dependenteSelecionado.endereco];
                                                newEnderecos[index].estado = e.target.value;
                                                setDependenteSelecionado({...dependenteSelecionado, endereco: newEnderecos});
                                            }}
                                        />
                                        <Form.Label>País</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.pais}
                                            onChange={(e) => {
                                                const newEnderecos = [...dependenteSelecionado.endereco];
                                                newEnderecos[index].pais = e.target.value;
                                                setDependenteSelecionado({...dependenteSelecionado, endereco: newEnderecos});
                                            }}
                                        />
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={endereco.codigoPostal}
                                            onChange={(e) => {
                                                const newEnderecos = [...dependenteSelecionado.endereco];
                                                newEnderecos[index].codigoPostal = e.target.value;
                                                setDependenteSelecionado({...dependenteSelecionado, endereco: newEnderecos});
                                            }}
                                        />
                                    </div>
                                ))}
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
    );
}
