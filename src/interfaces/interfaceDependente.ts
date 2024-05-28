import Endereco from "./interfaceEndereco";

export default interface Dependente{
    nome: string;
    nomeSocial: string;
    dataNascimento: string;
    endereco: Endereco[];
}