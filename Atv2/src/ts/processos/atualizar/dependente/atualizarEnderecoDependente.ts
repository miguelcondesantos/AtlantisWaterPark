import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Endereco from "../../../modelos/endereco";

export default class AtualizarEnderecoDependente extends Processo {
    private dependente: Cliente;

    constructor(dependente: Cliente) {
        super();
        this.dependente = dependente;
    }

    processar(): void {
        console.clear();
        console.log('Atualizando endereço do dependente...');

        const novaRua = this.entrada.receberTexto('Qual a nova rua?');
        const novoBairro = this.entrada.receberTexto('Qual o novo bairro?');
        const novaCidade = this.entrada.receberTexto('Qual a nova cidade?');
        const novoEstado = this.entrada.receberTexto('Qual o novo estado?');
        const novoPais = this.entrada.receberTexto('Qual o novo país?');
        const novoCodigoPostal = this.entrada.receberTexto('Qual o novo código postal?');

        const novoEndereco = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal);
        this.dependente.Endereco = novoEndereco;

        console.log('Endereço do dependente atualizado com sucesso!');
    }
}
