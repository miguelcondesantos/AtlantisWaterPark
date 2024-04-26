import Processo from "../../../abstracoes/processo";
import Documento from "../../../modelos/documento";
import Cliente from "../../../modelos/cliente";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";

export default class EditarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.clear()
        console.log('Iniciando o processo de edição de Documentos do cliente...')
        
        this.cliente.Documentos = []

        console.log("CPF");
        let novoCpf = this.entrada.receberTexto("Qual o novo CPF?");
        let novaDataExpedicaoCPF = this.entrada.receberData("Qual a nova data de expedição do CPF?");
        let documentoCPF = new Documento(novoCpf, TipoDocumento.CPF, novaDataExpedicaoCPF);
        this.cliente.Documentos.push(documentoCPF);

        console.log("RG");
        let novoRg = this.entrada.receberTexto("Qual o novo RG?");
        let novaDataExpedicaoRG = this.entrada.receberData("Qual a nova data de expedição do RG?");
        let documentoRG = new Documento(novoRg, TipoDocumento.RG, novaDataExpedicaoRG);
        this.cliente.Documentos.push(documentoRG);

        console.log("Passaporte");
        let novoPassaporte = this.entrada.receberTexto("Qual o novo passaporte?");
        let novaDataExpedicaoPassaporte = this.entrada.receberData("Qual a nova data de expedição do passaporte?");
        let documentoPassaporte = new Documento(novoPassaporte, TipoDocumento.Passaporte, novaDataExpedicaoPassaporte);
        this.cliente.Documentos.push(documentoPassaporte);

        console.log("Documentos editados com sucesso!");
        
        
        
    }
}