import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import AtualizarEnderecoDependente from "./atualizarEnderecoDependente";

export default class AtualizarDependente extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a atualização do dependente...');

        const nomeTitular = this.entrada.receberTexto('Qual o nome do titular em que o dependente será atualizado?');
        const clienteTitular = this.clientes.find(cliente => cliente.Nome === nomeTitular);

        if (!clienteTitular) {
            console.log('Titular não encontrado. Cadastre o titular primeiro.');
            return;
        }

        const nomeDependente = this.entrada.receberTexto('Qual o nome do dependente que deseja atualizar?');
        const dependente = clienteTitular.Dependentes.find(dependente => dependente.Nome === nomeDependente);

        if (!dependente) {
            console.log('Dependente não encontrado. Cadastre o dependente primeiro.');
            return;
        }

        console.log('Atualizando o dependente...');
        let novoNome = this.entrada.receberTexto('Qual o novo nome do dependente?');
        let novoNomeSocial = this.entrada.receberTexto('Qual o novo nome social do dependente?');
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento?');

        dependente.Nome = novoNome;
        dependente.NomeSocial = novoNomeSocial;
        dependente.DataNascimento = dataNascimento;

        const atualizarEndereco = new AtualizarEnderecoDependente(dependente);
        atualizarEndereco.processar();

        console.log(`Finalizando a atualização do dependente...`);
    }
}
