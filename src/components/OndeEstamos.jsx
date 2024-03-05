import TituloPreto from "./TituloPreto"
import './OndeEstamos.css'

function OndeEstamos() {

    return(
        <section id="ondeestamos" className="bg-light mx-auto d-flex justify-content-center aling-items-center">
            <div id="container-ondeestamos" className="p-2 mt-4 mx-auto d-flex gap-5 flex-wrap justify-content-around aling-items-center">
               
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <TituloPreto content="Onde Estamos"> </TituloPreto>
                    <p id="paragrafo-ondeestamos" className="p-2 mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, harum! Veniam doloremque nobis id, repellendus magni assumenda cupiditate consectetur ab pariatur voluptatum, consequatur ex rem ea, accusantium odio sit qui!</p>
                </div>
                <div className="p-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.2821636286698!2d-46.43883583036561!3d-23.419719268059158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce898a6a41b70d%3A0xe925b13318de020a!2sR.%20Vit%C3%B3ria%20da%20Conquista%2C%20811%20-%20Jardim%20Pres.%20Dutra%2C%20Guarulhos%20-%20SP%2C%2007171-090!5e0!3m2!1spt-BR!2sbr!4v1709571789580!5m2!1spt-BR!2sbr" id="iframe" allowFullScreen="" loading="async" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default OndeEstamos