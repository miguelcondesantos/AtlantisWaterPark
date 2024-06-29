import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Entrada from "../teste/entrada";

export default class CadastrarDependente{
    public cadastrarDependente(cliente: Cliente):void{
        let entrada = new Entrada()
        let dependente = new Cliente()
        
        dependente.nome = entrada.receberTexto(`Nome do dependente: `)
        dependente.nomeSocial = entrada.receberTexto(`Nome social do dependente: `)
        dependente.dataNascimento = entrada.receberData(`Data de nascimento do dependente neste modelo dd/mm/yyyy: `)
        dependente.dataCadastro = new Date()

        let endereco = new Endereco()
        endereco.rua = entrada.receberTexto(`Informe a rua: `)
        endereco.bairro = entrada.receberTexto(`Informe o bairro: `)
        endereco.cidade = entrada.receberTexto(`Informe a cidade: `)
        endereco.estado = entrada.receberTexto(`Informe o estado: `)
        endereco.pais = entrada.receberTexto(`Informe o país: `)
        endereco.codigoPostal = entrada.receberTexto(`Informe o CEP neste modelo xxxxx-xxx: `)
        dependente.endereco =  endereco

        dependente.titular = cliente

        cliente.dependentes.push(dependente)

        console.log(`Cadastro concluído com sucesso!`);

        
    }
}