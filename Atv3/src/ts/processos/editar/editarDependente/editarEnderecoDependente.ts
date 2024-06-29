import Endereco from "../../../modelos/endereco";
import Cliente from "../../../modelos/cliente";
import Processo from "../../../abstracoes/processo";

export default class EditarEnderecoDependente extends Processo{
    private dependente: Cliente

    constructor(dependente: Cliente){
        super()
        this.dependente = dependente
    }

    processar(): void {
        console.clear()
        console.log("Iniciando a edição do endereço do dependente...");

        let novaRua = this.entrada.receberTexto('Qual a nova rua?');
        let novoBairro = this.entrada.receberTexto('Qual o novo bairro?');
        let novaCidade = this.entrada.receberTexto('Qual a nova cidade?');
        let novoEstado = this.entrada.receberTexto('Qual o novo estado?');
        let novoPais = this.entrada.receberTexto('Qual o novo país?');
        let novoCodigoPostal = this.entrada.receberTexto('Qual o novo código postal?');
        let novoEnderecoCliente = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal);
        this.dependente.Endereco = novoEnderecoCliente;

        console.log("Endereço editado com sucesso!");
        
        
    }
}