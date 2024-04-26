import Processo from "../../../abstracoes/processo";
import MenuTipoDocumento from "../../../menus/menuTipoDocumento";
import Cliente from "../../../modelos/cliente";
import CadastroRg from "../cadastroDocumentos/cadastroRg";
import CadastroCPF from "../cadastroDocumentos/cadastroCPF";
import CadastroPassaporte from "../cadastroDocumentos/cadastroPassaporte";

export default class CadastroDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroCPF(this.cliente)
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new CadastroRg(this.cliente)
                    this.processo.processar()
                    break;
                case 3:
                    this.processo = new CadastroPassaporte(this.cliente)
                    this.processo.processar()
                    break;
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}