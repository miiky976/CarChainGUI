import { BtnPrimary } from "./BtnPrimary";

export const ProfileCard = ({ profileid = "Ingresar", OnClickState }) => {
    const MetaMask = () => {
        // const msg ="Hola";
        // OnClickState(msg.trim());
        if(window.ethereum && window.ethereum.isMetaMask){
            //Si tiene metamask
            window.ethereum.request({method:'eth_requestAccounts'})
            .then(result => {
                OnClickState(result[0]);
            })
            .catch(error => {
                console.log('Algo salio mal');
                console.error(error);
            });
        }else{
            window.open("https://metamask.io/", '_blank', 'noopener,noreferrer');
        }
    }
    return (
        <main className="p-card">
            <BtnPrimary OnClick={MetaMask} Texto={profileid}></BtnPrimary>
            <BtnPrimary Texto={"Mis Autos"}></BtnPrimary>
        </main>
    )
}