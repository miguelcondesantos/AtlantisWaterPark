import Endereco from "./interfaceEndereco";

export default interface Dependente{
    _id: string;
    nome: string;
    nomeSocial: string;
    dataNascimento: string;
    endereco: Endereco[];
}