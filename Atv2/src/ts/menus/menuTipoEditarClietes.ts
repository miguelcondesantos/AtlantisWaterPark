import Menu from "../interfaces/menu";

export default class MenuTipoEditarClientes implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`);
        console.log(`| Qual o tipo do cliente para editar? `);
        console.log(`----------------------`);
        console.log(`| 1 - Titular`);
        console.log(`| 2 - Dependente`);
        console.log(`----------------------`);
      
    }
}