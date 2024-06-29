import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Endereco from "../../../modelos/endereco";

export default class EditarEnderecoCliente extends Processo{
    private cliente : Cliente

    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a edição do endereço do cliente...');
        
        let novaRua = this.entrada.receberTexto('Qual a nova rua?');
        let novoBairro = this.entrada.receberTexto('Qual o novo bairro?');
        let novaCidade = this.entrada.receberTexto('Qual a nova cidade?');
        let novoEstado = this.entrada.receberTexto('Qual o novo estado?');
        let novoPais = this.entrada.receberTexto('Qual o novo país?');
        let novoCodigoPostal = this.entrada.receberTexto('Qual o novo código postal?');
        let novoEnderecoCliente = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal);
        this.cliente.Endereco = novoEnderecoCliente;

        console.log('Endereço editado com sucesso!');
        
    }
}