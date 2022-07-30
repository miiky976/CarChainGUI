const accion = () => {
    console.log('No tengo una accion');
}
export const BtnPrimary = ({Texto, Form, OnClick}) => {
    return (
        <button form={Form} className="btnPrimary" onClick={OnClick}>{Texto}</button>
    )
}