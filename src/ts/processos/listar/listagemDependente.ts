import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private cliente: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.cliente = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos dependentes de um titular...');
        let nomeTitular = this.entrada.receberTexto('Qual o nome do titular para listar os dependentes?');
        let clienteTitular = this.cliente.find(cliente => cliente.Nome === nomeTitular);
        
        if (!clienteTitular) {
            console.log('Cliente titular não encontrado.')
            return
        }

        if (!clienteTitular.Dependentes) {
            console.log('Nenhum dependente encontrado.')
            return
        }
    
        console.log(`Dependentes de ${clienteTitular.Nome}:`)
        clienteTitular.Dependentes.forEach(dependente => {
            this.impressor = new ImpressorDependente(dependente)
            console.log(this.impressor.imprimir())
        });
    }
}