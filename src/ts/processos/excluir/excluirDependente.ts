import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirDependente extends Processo {
    private dependente: Cliente[];

    constructor() {
        super();
        this.dependente = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.log("Excluindo Dependente...");
        let nomeTitular = this.entrada.receberTexto("Qual o nome do titular em que o dependente se encontra?");
        let clienteTitular = this.dependente.find(cliente => cliente.Nome === nomeTitular);

        if (!clienteTitular) {
            console.log("Cliente titular não encontrado. Verifique o nome e tente novamente.");
            return;
        }

        let nomeDependente = this.entrada.receberTexto("Qual o nome do dependente que deseja excluir?");
        let indiceDependente = clienteTitular.Dependentes.findIndex(dependente => dependente.Nome === nomeDependente);

        if (indiceDependente === -1) {
            console.log("Dependente não encontrado no cliente. Verifique o nome e tente novamente.");
            return;
        }

        clienteTitular.Dependentes.splice(indiceDependente, 1);

        console.log(`Dependente excluído com sucesso!`);
    }
}
