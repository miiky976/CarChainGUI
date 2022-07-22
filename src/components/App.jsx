import { Registrar } from "./Registrar";
import { Cabeza } from "./Cabeza";
import { FormTextField } from "./FormTextField";
import { Buscar } from "./Buscar";
import { Comprar } from "./Comprar";
export const App = () => {
    return (
        <>
            <Cabeza titulo='CarChain'></Cabeza>
            <Comprar/>
        </>
    )
}
