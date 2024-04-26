import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Armazem from "../../../dominio/armazem";
import EditarEnderecoDependente from "./editarEnderecoDependente";

export default class EditarDependente extends Processo{
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a edição do dependente...');

        const nomeTitular = this.entrada.receberTexto('Qual o nome do titular em que o dependente será editado?');
        const clienteTitular = this.clientes.find(cliente => cliente.Nome === nomeTitular);

        if (!clienteTitular) {
            console.log('Titular não encontrado. Cadastre o titular primeiro.');
            return;
        }

        const nomeDependente = this.entrada.receberTexto('Qual o nome do dependente que deseja editar?');
        const dependente = clienteTitular.Dependentes.find(dependente => dependente.Nome === nomeDependente);

        if (!dependente) {
            console.log('Dependente não encontrado. Cadastre o dependente primeiro.');
            return;
        }

        console.log('Editando o dependente...');
        let novoNome = this.entrada.receberTexto('Qual o novo nome do dependente?');
        let novoNomeSocial = this.entrada.receberTexto('Qual o novo nome social do dependente?');
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento?');

        dependente.Nome = novoNome;
        dependente.NomeSocial = novoNomeSocial;
        dependente.DataNascimento = dataNascimento;

        const editarEndereco = new EditarEnderecoDependente(dependente);
        editarEndereco.processar();

        console.log(`Finalizando a edição do dependente...`);
    }
}
