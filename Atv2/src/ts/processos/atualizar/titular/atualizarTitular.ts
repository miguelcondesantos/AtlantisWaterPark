import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import AtualizarTelefoneTitular from "./atualizarTelefoneTitular";
import AtualizarDocumentosTitular from "./atualizarDocumentosTitular";
import AtualizarEnderecoTitular from "./atulizarEnderecoTitular";

export default class AtualizarTitular extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }


    processar(): void {
        console.clear();
        console.log('Iniciando a atualização do cliente...');

        const nomeTitular = this.entrada.receberTexto('Qual o nome do titular que deseja atualizar?');
        const clienteTitular = this.clientes.find(cliente => cliente.Nome === nomeTitular);

        if (!clienteTitular) {
            console.log('Cliente titular não encontrado. Cadastre o titular primeiro.');
            return;
        }

        console.log('Atualizando o cliente...');
        let novoNome = this.entrada.receberTexto('Qual o novo nome do cliente?');
        let novoNomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?');
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento?');
        clienteTitular.Nome = novoNome;
        clienteTitular.NomeSocial = novoNomeSocial;
        clienteTitular.DataNascimento = dataNascimento;
        
        this.processo = new AtualizarTelefoneTitular(clienteTitular);
        this.processo.processar()

        this.processo = new AtualizarDocumentosTitular(clienteTitular);
        this.processo.processar()

        this.processo = new AtualizarEnderecoTitular(clienteTitular);
        this.processo.processar()

        console.log(`Finalizando a atualização do cliente...`);
        
    }
}
