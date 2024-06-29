import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";

export default class CadastroPassaporte extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do passaporte?')
        let data = this.entrada.receberData('Qual a data de expedição do passaporte?')
        let passaporte = new Documento(numero, TipoDocumento.Passaporte, data)
        this.cliente.Documentos.push(passaporte)
    }
}