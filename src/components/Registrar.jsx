import { BtnPrimary } from "./BtnPrimary";
import { FormTextField } from "./FormTextField";
export const Registrar = () => {
    return (
        <main className="l-form">
            <div className="form">
                <form autoComplete="off" action="">
                    <h2>Registrar Auto</h2>
                        <FormTextField content={'Nombre'} id={'nombre'}/>
                        <FormTextField content={'Modelo'} id={'modelo'}/>
                        <FormTextField content={'Marca'} id={'marca'}/>
                        <FormTextField content={'Motor'} id={'motor'}/>
                        <FormTextField content={'Dueño'} id={'owner'}/>
                        <BtnPrimary texto={'Registrar'}></BtnPrimary>
                </form>
            </div>
        </main>
    )
}
