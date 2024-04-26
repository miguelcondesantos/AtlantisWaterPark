import Processo from "../../abstracoes/processo"
import MenuPrincipal from "../../menus/menuPricipal"
import ListagemAcomodacoes from "../listar/listagemAcomodacoes"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import TipoEditarClientes from "./tipoEditarClientes"
import TipoExcluirCliente from "./tipoExcluirCliente"
import RealizarHospedagem from "./tipoRealizarHospedagem"
import ListagemHospedes from "../listar/listagemHópedes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2: 
                this.processo = new TipoEditarClientes()
                this.processo.processar()
                break;
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoExcluirCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new RealizarHospedagem()
                this.processo.processar()
                break
            case 7:
                this.processo = new ListagemHospedes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}