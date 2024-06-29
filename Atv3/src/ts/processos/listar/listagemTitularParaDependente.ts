import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularDependente extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log("Iniciando a listagem dos titulares de um dependente");
        let nomeDependente = this.entrada.receberTexto("Qual o nome do dependente para listar o titular?");
        let dependente = this.clientes.find(
        (cliente) =>
            cliente.Dependentes.find((dependente) => dependente.Nome === nomeDependente)
        );

        if (!dependente) {
            console.log("Dependente não encontrado. Verifique o nome e tente novamente.");
            return;
        }

        const titular = this.clientes.find(
        (titular): titular is Cliente => {
            return typeof titular !== 'undefined' && Array.isArray(titular.Dependentes);
        }
        ) as Cliente;

        if (!titular) {
            console.log('Titular não encontrado para o dependente.');
            return;
        }

        console.log(`Titular do dependente ${nomeDependente}:`);
        this.impressor = new ImpressorCliente(titular);
        console.log(this.impressor.imprimir());
  }
}