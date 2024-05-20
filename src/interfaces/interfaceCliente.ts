import Endereco from "./interfaceEndereco";
import Telefone from "./interfaceTelefone";
import Dependente from "./interfaceDependente";

export default interface Cliente {
    _id: string;
    nome: string;
    nomeSocial: string;
    dataNascimento: string;
    telefones: Telefone[];
    enderecos: Endereco[];
    rg: string;
    cpf: string;
    passaporte: string;
    dependente: Dependente[];
}