import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorHospedagem implements Impressor {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string { 
        console.clear()
        let impressao = `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento}\n`
            + `| Acomodação: ${this.cliente.Acomodacao.NomeAcomadacao}`
        return impressao
    }

}