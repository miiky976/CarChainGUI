const accion = () => console.log('No tengo una accion');
export const BtnPrimaryCont = ({Texto,Form, OnClick=accion}) => {
    return (
        <button form={Form} className="BtnPrimaryCont" onClick={OnClick}>{Texto}</button>
    )
}