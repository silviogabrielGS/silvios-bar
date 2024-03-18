import iconeWhatsapp from '../images/Whatsapp.svg'
import './IconeWhatsapp.css'

function IconeWhatsapp() {
    return (
        <>
            <div class="position-fixed bottom-0 end-0 p-3">
                <a href='https://api.whatsapp.com/send?phone=5511939460060&text=olá+quero+comprar+uma+cachaça&'>
                    <img className="icone-whatsapp" src={iconeWhatsapp} alt="" />
                </a>
            </div>
        </>
    )
}

export default IconeWhatsapp