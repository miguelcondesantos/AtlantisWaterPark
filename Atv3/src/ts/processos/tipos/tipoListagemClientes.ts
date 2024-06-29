import Processo from "../../abstracoes/processo";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListagemTitulares from "../listar/listagemTitulares";
import ListagemDependentes from "../listar/listagemDependente";
import ListagemTitularDependente from "../listar/listagemTitularParaDependente";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break
            case 3:
                this.processo = new ListagemTitularDependente()
                this.processo.processar()
            case 4:
                this.execucao = false
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}