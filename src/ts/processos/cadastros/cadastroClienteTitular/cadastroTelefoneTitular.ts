import Processo from "../../../abstracoes/processo";
import Telefone from "../../../modelos/telefone";
import Cliente from "../../../modelos/cliente";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar():void{
        let numero = this.entrada.receberTexto("Qual o número do telefone?")
        let ddd = this.entrada.receberTexto("Qual o DDD do telefone?")
        let telefone = new Telefone(numero, ddd)
        this.cliente.Telefones.push(telefone)
    }
}