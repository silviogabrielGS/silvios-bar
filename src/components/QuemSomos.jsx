import TituloPreto from "./TituloPreto"
import './QuemSomos.css'

function QuemSomos() {
    return(
            <section id="quemsomos" className="p-2 mx-auto d-flex justify-content-center align-items-center">
                <div className="d-flex bg-black w-50">
                    <img className="w-100" src="" alt="" />
                </div>
                <div className=" d-flex flex-column justify-content-center align-items-center w-50">
                    <TituloPreto content="Quem somos"> </TituloPreto>
                    <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, harum! Veniam doloremque nobis id, repellendus magni assumenda cupiditate consectetur ab pariatur voluptatum, consequatur ex rem ea, accusantium odio sit qui!</p>
                </div>
            </section>
    )
}

export default QuemSomos