import Processo from "../../abstracoes/processo";
import MenuTipoEditarClientes from "../../menus/menuTipoEditarClientes";
import EditarCliente from "../editar/editarCliente/editarCliente";
import EditarDependente from "../editar/editarDependente/editarDependente";


export default class TipoEditarClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoEditarClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new EditarCliente()
                this.processo.processar()
                break;
            case 2:
                this.processo = new EditarDependente()
                this.processo.processar()            
                break;
            case 3:
                this.execucao = false
                break;

        }
    }

}