import Cliente from "../modelos/cliente";

export default function listarClientes(clientes: Cliente[]): void {
    console.log("Clientes cadastrados:");
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado");
    } else {
        clientes.forEach((cliente, index) => {
            console.log(`Cliente ${index + 1}:`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome Social: ${cliente.nomeSocial}`);
            console.log(`Data de Nascimento: ${cliente.dataNascimento.toLocaleDateString()}`);
            console.log(`Endereço: ${cliente.endereco.rua}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade}, ${cliente.endereco.estado}, ${cliente.endereco.pais}, ${cliente.endereco.codigoPostal}`);
            console.log("--------------------------");
        });
    }
}
