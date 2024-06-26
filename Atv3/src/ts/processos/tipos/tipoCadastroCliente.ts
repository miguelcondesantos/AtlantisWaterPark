import Processo from "../../abstracoes/processo";
import MenuTipoCadastroCliente from "../../menus/menuTipoCadastroCliente";
import CadastroDependente from "../cadastros/cadastroClienteDependente/cadastroClienteDependente";
import CadastroClienteTitular from "../cadastros/cadastroClienteTitular/cadastroClienteTitular";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroDependente()
                this.processo.processar()
                break;
            case 3:
                this.execucao = false
                break;
            default:
                console.log('Opção não entendida :(')
        }
    }
}