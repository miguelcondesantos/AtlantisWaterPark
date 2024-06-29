import Processo from "../../abstracoes/processo";
import MenuTipoExcluirCliente from "../../menus/menuExcluirClientes";
import ExcluirTitular from "../excluir/excluirTitular";
import ExcluirDependente from "../excluir/excluirDependente";

export default class TipoExcluirCliente extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoExcluirCliente()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch(this.opcao){
            case 1:
                this.processo = new ExcluirTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new ExcluirDependente()
                this.processo.processar()
                break
        }
    }
}