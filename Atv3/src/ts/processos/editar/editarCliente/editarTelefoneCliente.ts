import Telefone from "../../../modelos/telefone";
import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";

export default class EditarTelefoneCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a edição do telefone do cliente...');

        let novoNumero = this.entrada.receberTexto('Qual o novo número?');
        let novoDDD = this.entrada.receberTexto("Qual o novo DDD?");
        let novoTelefone = new Telefone(novoNumero, novoDDD);
        this.cliente.Telefones.push(novoTelefone)

        console.log('Telefone editada com sucesso!');
    }
}