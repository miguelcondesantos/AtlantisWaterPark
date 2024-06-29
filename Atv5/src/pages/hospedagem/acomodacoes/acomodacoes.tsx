import React, { useState, useEffect } from "react";
import NavBar from "../../../navbar/navbar";
import { Container, Card } from 'react-bootstrap';
import "./acomodacoes.css";
import Acomodacao from "../../../interfaces/interfaceAcomodacoes";

export default function Acomodacoes() {
    const [acomodacoes, setAcomodacoes] = useState<Acomodacao[]>([]);

    useEffect(() => {
        const fetchAcomodacoes = async () => {
            try {
                const response = await fetch('http://localhost:5000/acomodacoes');
                if (response.ok) {
                    const data = await response.json();
                    setAcomodacoes(data);
                } else {
                    console.error("Erro ao buscar as acomodações");
                }
            } catch (error) {
                console.error("Erro ao buscar as acomodações", error);
            }
        };

        fetchAcomodacoes();
    }, []);

    return (
        <>
            <NavBar />
            <Container className="aaaa">
                <h1>Acomodações</h1>
                {acomodacoes.map((acomodacao) => (
                    <Card className="mb-4" key={acomodacao._id}>
                        <Card.Body>
                            <Card.Title>{acomodacao.nome}</Card.Title>
                            <Card.Text>
                                <p>Quantidade de leitos para solteiros: {acomodacao.leitos_solteiros}</p>
                                <p>Quantidade de leitos para casais: {acomodacao.leitos_casais}</p>
                                <p>Climatização: {acomodacao.climatização}</p>
                                <p>Quantidade de garagens disponíveis: {acomodacao.garagens_disponiveis}</p>
                                <p>Quantidade de suítes: {acomodacao.suites}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
}
