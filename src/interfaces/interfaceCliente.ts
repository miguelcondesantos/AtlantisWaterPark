import Endereco from "./interfaceEndereco";
import Telefone from "./interfaceTelefone";
import Dependente from "./interfaceDependente";
import Acomodacao from "./interfaceAcomodacoes";

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
    dependentes: Dependente[];
    hospedagem: Acomodacao[];
}