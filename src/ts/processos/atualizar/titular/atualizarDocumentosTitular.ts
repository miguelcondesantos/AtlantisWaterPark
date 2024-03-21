import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Documento from "../../../modelos/documento";
import { TipoDocumento } from "../../../enumeracoes/TipoDocumento";

export default class AtualizarDocumentosTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.clear();
        console.log(`Atualizando documentos do titular...\n`);

        this.cliente.Documentos = [];

        console.log(`Cpf`);
        const novoCPF = this.entrada.receberTexto('Qual o novo CPF?');
        const dataExpedicaoCPF = this.entrada.receberData('Qual a nova data de expedição do CPF?\n');
        const documentoCPF = new Documento(novoCPF, TipoDocumento.CPF, dataExpedicaoCPF);
        this.cliente.Documentos.push(documentoCPF);

        console.log(`Rg`);
        const novoRG = this.entrada.receberTexto('Qual o novo RG?');
        const dataExpedicaoRG = this.entrada.receberData('Qual a nova data de expedição do RG?\n');
        const documentoRG = new Documento(novoRG, TipoDocumento.RG, dataExpedicaoRG);
        this.cliente.Documentos.push(documentoRG);

        console.log(`Passaporte`);	
        const novoPassaporte = this.entrada.receberTexto('Qual o novo número de passaporte?');
        const dataExpedicaoPassaporte = this.entrada.receberData('Qual a nova data de expedição do passaporte?');
        const documentoPassaporte = new Documento(novoPassaporte, TipoDocumento.Passaporte, dataExpedicaoPassaporte);
        this.cliente.Documentos.push(documentoPassaporte);

        console.log('Documentos do titular atualizados com sucesso!');
    }
}
