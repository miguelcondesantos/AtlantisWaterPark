import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Endereco from "../../../modelos/endereco";

export default class AtualizarEnderecoTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.clear();
        console.log('Atualizando endereço do titular...');
        const novaRua = this.entrada.receberTexto('Qual a nova rua?');
        const novoBairro = this.entrada.receberTexto('Qual o novo bairro?');
        const novaCidade = this.entrada.receberTexto('Qual a nova cidade?');
        const novoEstado = this.entrada.receberTexto('Qual o novo estado?');
        const novoPais = this.entrada.receberTexto('Qual o novo país?');
        const novoCodigoPostal = this.entrada.receberTexto('Qual o novo código postal?');

        const novoEndereco = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal);
        this.cliente.Endereco = novoEndereco;

        console.log('Endereço do titular atualizado com sucesso!');
    }
}
