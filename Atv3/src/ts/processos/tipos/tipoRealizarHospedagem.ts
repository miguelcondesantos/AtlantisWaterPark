import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Acomodacao from "../../modelos/acomodacao"
import Cliente from "../../modelos/cliente"
import ListagemAcomodacoes from "../listar/listagemAcomodacoes"

export default class RealizarHospedagem extends Processo {
    private clientes!: Cliente[]
    private acomodacoes!: Acomodacao[]

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {  
        console.clear()
        console.log('Iniciando realização da hospedagem...')
        let nomeTitular = this.entrada.receberTexto('Qual o nome do titular da hospedagem?')
        let clienteTitular = this.clientes.find(cliente => cliente.Nome === nomeTitular)

        if (!clienteTitular){
            console.log("Cliente não encontrado. Verifique o nome e tente novamente");    
            return
        }

        this.processo = new ListagemAcomodacoes()
        this.processo.processar()

        let indexAcomodacao = this.entrada.receberNumero('Qual o índice da acomodação? Escolha de 0 a 5')

        if (indexAcomodacao < 0 || indexAcomodacao >= this.acomodacoes.length) {
            console.log("Índice de acomodação inválido. Tente novamente.")
            return
        }

        let acomodacaoEscolhida = this.acomodacoes[indexAcomodacao]
        
        clienteTitular.Acomodacao = acomodacaoEscolhida;
        acomodacaoEscolhida.adicionarHospede(clienteTitular);

        console.log('Hospedagem realizada com sucesso!')
    }
}
