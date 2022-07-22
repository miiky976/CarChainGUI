

export const Buscar = ({id}) => {
    return (
        <>
            <span className="searchTxt">Resultados de busqueda</span>
            <div className="searchvar">
                <label htmlFor={id} className="searchicon">
                    <span className="iconify" data-icon="gg:search"></span>
                </label>
                <input id={id} type="text" name="searchinput" className="searchInput" />
            </div>
        </>
    )
}