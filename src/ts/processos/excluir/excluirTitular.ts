import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirTitular extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Excluindo o cliente...");
        let nomeCliente = this.entrada.receberTexto("Qual o nome do cliente?");
        let indiceCliente = this.clientes.findIndex(cliente => cliente.Nome === nomeCliente);

        if (indiceCliente === -1) {
            console.log("Cliente não encontrado. Verifique o nome e tente novamente.");
            return;
        }

        this.clientes.splice(indiceCliente, 1);
        console.log("Cliente excluído com sucesso!");
    }
}
