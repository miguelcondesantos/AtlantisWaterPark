import Home from "../pages/home/home";
import CadastroCliente from "../pages/cliente/cadastro/cadastroCliente";
import ListarCliente from "../pages/cliente/listar/listarCliente";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastroCliente" element={<CadastroCliente/>} />
                <Route path="/listarCLiente" element={<ListarCliente/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;