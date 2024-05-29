import NavBar from "../../../navbar/navbar";
import { Container, Button, Form } from 'react-bootstrap';
import "./realizarHospedagem.css";
import { useEffect, useState } from "react";
import Cliente from "../../../interfaces/interfaceCliente";
import Acomodacao from "../../../interfaces/interfaceAcomodacoes";

export default function RealizarHospedagem() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [acomodacoes, setAcomodacoes] = useState<Acomodacao[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState<string>("");
    const [acomodacaoSelecionada, setAcomodacaoSelecionada] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    useEffect(() => {
        fetch('http://localhost:5000/clientes')
            .then(response => response.json())
            .then(data => setClientes(data))
            .catch(error => console.error('Erro ao buscar clientes:', error));

        fetch('http://localhost:5000/acomodacoes')
            .then(response => response.json())
            .then(data => setAcomodacoes(data))
            .catch(error => console.error('Erro ao buscar acomodações:', error));
    }, []);

    const handleClienteChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setClienteSelecionado(event.target.value as string);
    };

    const handleAcomodacaoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAcomodacaoSelecionada(event.target.value as string);
    };

    const finalizarHospedagem = () => {
        fetch(`http://localhost:5000/realizarHospedagem/${clienteSelecionado}/${acomodacaoSelecionada}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clienteId: clienteSelecionado,
                acomodacaoId: acomodacaoSelecionada
            }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 400) {
                return response.json();
            } else {
                throw new Error("Cliente já Hospedado!");
            }
        })
        .then(data => {
            if (data) {
                setMensagem(data.message);
            } else {
                setMensagem("Hospedagem realizada com sucesso!");
            }
        })
        .catch(error => {
            console.error("Erro ao realizar hospedagem:", error);
            setMensagem("Erro ao realizar hospedagem.");
        });
    };
    

    return (
        <>
            <NavBar />
            <Container className="cadastroAAA">
                <h1>Realizar Hospedagem</h1>

                <Form className="formAAA">
                    <Form.Group controlId="clienteSelect">
                        <Form.Label>Selecione o Cliente</Form.Label>
                        <Form.Control as="select" className="selectAAA" value={clienteSelecionado} onChange={handleClienteChange}>
                            <option disabled value="">Selecione o Cliente</option>
                            {clientes.map(cliente => (
                                <option key={cliente._id} value={cliente._id}>{cliente.nome}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="acomodacaoSelect">
                        <Form.Label>Selecione a Acomodação</Form.Label>
                        <Form.Control as="select" className="selectAAA" value={acomodacaoSelecionada} onChange={handleAcomodacaoChange}>
                            <option disabled value="">Selecione a Acomodação</option>
                            {acomodacoes.map(acomodacao => (
                                <option key={acomodacao._id} value={acomodacao._id}>{acomodacao.nome}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Button className="botaoAAA" type="button" onClick={finalizarHospedagem}>Finalizar Hospedagem</Button>
                    {mensagem && <p><b>{mensagem}</b></p>}
                </Form>
            </Container>
        </>
    );
}
