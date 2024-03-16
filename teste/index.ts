import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Documento from "../modelos/documento";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import CadastroCliente from "../cadastro/cadastrarCliente";
import CadastrarDependente from "../cadastro/cadastrarDependente";
import Entrada from "./entrada";
import listarClientes from "../listagem/listaClientes";

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco =  endereco

let telefone =  new Telefone()
telefone.ddd = `12`
telefone.numero = `11111-1111`
cliente.telefones.push(telefone)

let documentoCPF = new Documento()
documentoCPF.numero = `111.111.111-11`
documentoCPF.tipo = TipoDocumento.CPF
documentoCPF.dataExpedicao = new Date(2000, 1, 1)
cliente.documentos.push(documentoCPF)

let documentoRG = new Documento()
documentoRG.numero = `22.222.222-2`
documentoRG.tipo = TipoDocumento.RG
documentoRG.dataExpedicao = new Date(2000, 1, 1)
cliente.documentos.push(documentoRG)

let documentoPassaporte = new Documento()
documentoPassaporte.numero = `ABC123456`
documentoPassaporte.tipo = TipoDocumento.Passaporte
documentoPassaporte.dataExpedicao = new Date(2000, 1, 1)
cliente.documentos.push(documentoPassaporte)

let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.titular = cliente
cliente.dependentes.push(dependente)

let clientes: Cliente[] = []
clientes.push(cliente)


console.log(cliente);
console.log(dependente);
listarClientes(clientes);


const cadastroCliente = new CadastroCliente();
const cadastroDependente = new CadastrarDependente();
const entrada = new Entrada();

let execucao = true;
while (execucao) {
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar dependente`);
    console.log(`3 - Listar clientes`);
    console.log(`4 - Sair`);

    const opcao = entrada.receberNumero(`\nEscolha uma das opções: `);

    switch (opcao) {
        case 1:
            cadastroCliente.cadastrarCliente(clientes); 
            break;
        case 2:
            cadastroDependente.cadastrarDependente(cliente);
            break;
        case 3:
            listarClientes(clientes);
            break;
        case 4:
            console.log(`Saindo...`);
            execucao = false;
            break;
        default:
            console.log(`Opção inválida. Tente novamente.`);
            break;
    }
}