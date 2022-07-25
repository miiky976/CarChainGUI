import { CarView } from "./CarView";
import { BtnIcon } from "./BtnIcon";
import { SimpleTextField } from "./SimpleTextField";
export const Comprar = ({ id }) => {
    return (
        <main className="tercios">
            <span className="searchTxt">Resultados de busqueda</span>
            <div className="searchvar">
                <SimpleTextField id={"buscador"} placeH={"Buscar"}/>
                <BtnIcon icon={"gg:search"}/>
            </div>
            <CarView></CarView>
            <CarView img={'https://tuningcar.mx/wp-content/uploads/2021/02/Chevy-C2-2007-Stealth-1.jpg'}></CarView>
            <CarView img={'https://i.pinimg.com/originals/9f/93/37/9f9337891b2ffde505a88ecd19b23fa9.jpg'}></CarView>
            <CarView img={'https://farm9.staticflickr.com/8153/7168697426_a2d547c7f1.jpg'} titulo='Bochito' descr={'Bochito Bien Tuneado'}></CarView>
            <CarView img={'https://tork.news/__export/1600975297240/sites/tork/img/2020/09/24/1_3_crop1600975296745.jpg_1902800913.jpg'} titulo='Bochito' descr={'Bochito Bien Tuneado'}></CarView>
            <CarView img={'https://cdn2.atraccion360.com/media/aa/styles/xlarge/public/images/2014/07/vocho-tuning-cars-raros-15.jpg'} titulo='Bochito' descr={'Bochito Bien Tuneado'}></CarView>
        </main>
    )
}
