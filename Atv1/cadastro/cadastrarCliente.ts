import Entrada  from "../teste/entrada"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"
import Cliente from "../modelos/cliente"
import { TipoDocumento } from "../enumeracoes/tipoDocumento"

export default class CadastroCliente{

    public cadastrarCliente(clientes: Cliente[] = []): void {
        console.log(`\nCadastro do cliente`);
        let entrada: Entrada = new Entrada();
        let cliente = new Cliente();

        cliente.nome = entrada.receberTexto(`Informe o nome do cliente: `);
        cliente.nomeSocial = entrada.receberTexto(`Informe o nome social do cliente: `);
        cliente.dataNascimento = entrada.receberData(`Informe a data de nascimento do cliente neste modelo dd/mm/yyyy: `);
        cliente.dataCadastro = new Date();

        let telefone = new Telefone();
        telefone.ddd = entrada.receberTexto(`Informe o ddd do telefone: `);
        telefone.numero = entrada.receberTexto(`Informe o telefone neste modelo xxxxx-xxxx: `);
        cliente.telefones.push(telefone);

        let endereco = new Endereco();
        endereco.rua = entrada.receberTexto(`Informe a rua: `);
        endereco.bairro = entrada.receberTexto(`Informe o bairro: `);
        endereco.cidade = entrada.receberTexto(`Informe a cidade: `);
        endereco.estado = entrada.receberTexto(`Informe o estado: `);
        endereco.pais = entrada.receberTexto(`Informe o país: `);
        endereco.codigoPostal = entrada.receberTexto(`Informe o CEP neste modelo xxxxx-xxx: `);
        cliente.endereco = endereco;

        let documentoCPF = new Documento();
        documentoCPF.numero = entrada.receberTexto(`Informe o CPF neste modelo xxx.xxx.xxx-xx: `);
        documentoCPF.tipo = TipoDocumento.CPF;
        documentoCPF.dataExpedicao = entrada.receberData(`Informe a data de expedição do CPF `);
        cliente.documentos.push(documentoCPF);

        let documentoRG = new Documento();
        documentoRG.numero = entrada.receberTexto(`Informe o RG neste modelo xx.xxx.xxx-x: `);
        documentoRG.tipo = TipoDocumento.RG;
        documentoRG.dataExpedicao = entrada.receberData(`Informe a data de expedição do RG `);
        cliente.documentos.push(documentoRG);

        let documentoPassaporte = new Documento();
        documentoPassaporte.numero = entrada.receberTexto(`Informe o passaporte neste modelo xxxxxxxxx: `);
        documentoPassaporte.tipo = TipoDocumento.Passaporte;
        documentoPassaporte.dataExpedicao = entrada.receberData(`Informe a data de expedição do Passaporte `);
        cliente.documentos.push(documentoPassaporte);

        clientes.push(cliente);
        console.log(`Cadastro concluído com sucesso!`);
    }

}