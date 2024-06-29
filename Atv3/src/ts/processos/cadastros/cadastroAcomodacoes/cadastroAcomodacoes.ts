import Processo from "../../../abstracoes/processo";
import DiretorSolteiroSimples from "../../../diretores/diretorSolteiroSimples";
import DiretorCasalSimples from "../../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../../diretores/diretorSolteiroMais";
import Armazem from "../../../dominio/armazem";
import Acomodacao from "../../../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretor.construir())

        let diretor2 = new DiretorCasalSimples()
        this.acomodacoes.push(diretor2.construir())

        let diretor3 = new DiretorFamiliaSimples()
        this.acomodacoes.push(diretor3.construir())

        let diretor4 = new DiretorFamiliaMais()
        this.acomodacoes.push(diretor4.construir())

        let diretor5 = new DiretorFamiliaSuper()
        this.acomodacoes.push(diretor5.construir())

        let diretor6 = new DiretorSolteiroMais()
        this.acomodacoes.push(diretor6.construir())
    }
}