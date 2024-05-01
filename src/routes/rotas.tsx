import Home from "../pages/home/home";
import CadastroCliente from "../pages/cliente/cadastro/cadastroCliente";
import ListarCliente from "../pages/cliente/listar/listarCliente";
import CadastroDependente from "../pages/dependente/cadastro/cadastroDependente";
import ListarDependente from "../pages/dependente/listar/listarDependente";
import Acomodacoes from "../pages/hospedagem/acomodacoes/acomodacoes";
import ListarHospedes from "../pages/hospedagem/listarHóspedes/listarHospedes";
import RealizarHospedagem from "../pages/hospedagem/realizarHospedagem/realizarHospedagem";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastroCliente" element={<CadastroCliente/>} />
                <Route path="/listarCLiente" element={<ListarCliente/>}/>
                <Route path = "/cadastroDependente" element={<CadastroDependente/>}/>
                <Route path = "/listarDependente" element={<ListarDependente/>}/>
                <Route path = "/acomodacoes" element={<Acomodacoes/>}/>
                <Route path = "/listarHospedes" element={<ListarHospedes/>}/>
                <Route path = "/realizarHospedagem" element={<RealizarHospedagem/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;