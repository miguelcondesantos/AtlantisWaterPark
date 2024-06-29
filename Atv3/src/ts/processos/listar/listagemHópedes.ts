import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";

export default class ListagemHospedes extends Processo {
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {  
        console.log('Listagem de hóspedes por acomodação:');

        this.acomodacoes.forEach(acomodacao => {
            console.log(`Acomodação: ${acomodacao.NomeAcomadacao}`);
            console.log('Hóspedes:');
            
            if (acomodacao.obterHospedes().length > 0) {
                acomodacao.obterHospedes().forEach(hospede => {
                    console.log(`- ${hospede.Nome}`);
                });
            } else {
                console.log('Nenhum hóspede nesta acomodação.');
            }
            
            console.log('---');
        });
    }
}
