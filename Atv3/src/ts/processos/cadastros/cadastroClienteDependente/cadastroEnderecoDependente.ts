import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Endereco from "../../../modelos/endereco";

export default class CadastroEnderecoDependente extends Processo {
    private dependente: Cliente

    constructor(dependente: Cliente){
        super()
        this.dependente = dependente
    }

    processar():void{
        console.log("Iniciando o cadastro de endereço para o dependente...")
        let rua = this.entrada.receberTexto("Qual a rua?")
        let bairo = this.entrada.receberTexto("Qual o bairro?")
        let cidade = this.entrada.receberTexto("Qual a cidade?")
        let estado = this.entrada.receberTexto("Qual o estado?")
        let pais = this.entrada.receberTexto("Qual o país?")
        let codigoPostal = this.entrada.receberTexto("Qual o código postal?")
        let endereco = new Endereco(rua,bairo,cidade,estado,pais,codigoPostal)
        this.dependente.Endereco = endereco
    }
}
