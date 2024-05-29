import React, { useState, useEffect } from "react";
import { Container, Card, ListGroup, Form } from 'react-bootstrap';
import NavBar from "../../../navbar/navbar";
import "./listarHospedes.css";
import Acomodacao from "../../../interfaces/interfaceAcomodacoes";

export default function ListarHospedes() {
    const [acomodacoes, setAcomodacoes] = useState<Acomodacao[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        fetch('http://localhost:5000/acomodacoes')
            .then(response => response.json())
            .then(data => {
                setAcomodacoes(data);
            })
            .catch(error => console.error('Erro ao buscar acomodações:', error));
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <NavBar />
            <Container className="container-geral">
                <h1>Listar Hospedes por Acomodação</h1>

                {acomodacoes && acomodacoes.map(acomodacao => (
                    <div key={acomodacao._id} className="acomodacao-container">
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{acomodacao.nome}</Card.Title>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Pesquisar hóspede" 
                                    className="mb-3"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <ListGroup className="list-group" variant="flush">
                                    {acomodacao.clientes && acomodacao.clientes
                                        .filter(cliente => cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()))
                                        .map(cliente => (
                                            <ListGroup.Item key={cliente._id}>{cliente.nome}</ListGroup.Item>
                                        ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Container>
        </>
    );
}
