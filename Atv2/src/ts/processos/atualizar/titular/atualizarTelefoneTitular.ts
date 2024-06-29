import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Telefone from "../../../modelos/telefone";

export default class AtualizarTelefoneTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.clear();
        console.log('Atualizando telefones do titular...');

        const novoNumero = this.entrada.receberTexto('Qual o novo número de telefone?');
        const novoTipo = this.entrada.receberTexto('Qual o tipo do novo telefone?');
        const novoTelefone = new Telefone(novoNumero, novoTipo);
        this.cliente.Telefones.push(novoTelefone);

        console.log('Telefones do titular atualizados com sucesso!');
    }
}
