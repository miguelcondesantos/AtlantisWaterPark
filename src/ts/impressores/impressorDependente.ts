import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorEndereco from "./impressorEndereco";


export default class ImpressorDependente implements Impressor {
    private dependente: Cliente;
    private impressor!: Impressor

    constructor(dependente: Cliente) {
        this.dependente = dependente;
    }

    imprimir(): string {
        let impressao = `****************************\n`
        impressao += `| Nome do Dependente: ${this.dependente.Nome}\n`
        impressao += `| Nome Social: ${this.dependente.NomeSocial}\n`
        impressao += `| Data de Nascimento: ${this.dependente.DataNascimento.toLocaleDateString()}\n`
        
        this.impressor = new ImpressorEndereco(this.dependente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        
        return impressao;
    }
}