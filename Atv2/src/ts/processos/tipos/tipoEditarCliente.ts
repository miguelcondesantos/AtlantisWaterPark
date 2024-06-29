import Processo from "../../abstracoes/processo";
import MenuTipoEditarClientes from "../../menus/menuTipoEditarClietes";
import AtualizarTitular from "../atualizar/titular/atualizarTitular";
import AtualizarDependente from "../atualizar/dependente/atualizarDependente";


export default class TipoEditarCliente extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoEditarClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch(this.opcao){
            case 1:
                this.processo = new AtualizarTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new AtualizarDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }

    }
}