import Processo from "../abstracoes/processo";
import Principal from "../processos/tipos/principal";
import Entrada from "../io/entrada";
import TipoCadastroCliente from "../processos/tipos/tipoCadastroCliente";
import TipoListagemClientes from "../processos/tipos/tipoListagemClientes";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let processo: Processo
let execucao: Boolean = true

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
  
}