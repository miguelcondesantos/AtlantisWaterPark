import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";

export default class CadastroDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...');
        let nomeTitular = this.entrada.receberTexto('Qual o nome do titular em que o dependente será cadastrado?');
        let armazem = Armazem.InstanciaUnica;
        let clienteTitular = armazem.Clientes.find(cliente => cliente.Nome === nomeTitular);
        
        if (!clienteTitular) {
            console.log('Cliente titular não encontrado. Cadastre o titular primeiro.');
            return;
        }

        let nome = this.entrada.receberTexto('Qual o nome do dependente?');
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do dependente?');
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        let dependente = new Cliente(nome, nomeSocial, dataNascimento);

        this.processo = new CadastroEnderecoDependente(dependente);
        this.processo.processar();

        clienteTitular.Dependentes.push(dependente);

        console.log('Finalizando o cadastro do dependente...')
    }
}
