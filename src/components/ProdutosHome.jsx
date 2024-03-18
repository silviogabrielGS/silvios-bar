import './ProdutosHome.css'
import dreher from '../images/img-cachacas-pequena/20240317_135359.jpg'
import vb from '../images/img-cachacas-pequena/20240317_133926.jpg'
import mastergold from '../images/img-cachacas-pequena/20240317_135245.jpg'
import baianinha from '../images/img-cachacas-pequena/20240317_133855.jpg'

function ProdutosHome() {
    return(
        <>
        <div id='container-produtos' className='d-flex flex-wrap gap-5 justify-content-center aling-items-center'>
            <div className='p-5'>
                <img className="bg-light m-2" src={dreher} alt="" />
                <p>Conhaque Dreher 900ml. Aguardente composta com gengibre, destilado alcóolico de cana-de-açúcar e extrato vegetal aromático de gengibre</p>
            </div>
            <div className='p-5'>
                <p className='mb-5'>Aguardente de Cana Velho barreiro 910 ml. A Velho Barreiro é conhecida como uma das cachaças mais tradicionais do Brasil.</p>
                <img className="bg-light m-2" src={vb} alt="" />
            </div>
            <div className='p-5'>
                <img className="bg-light m-2" src={mastergold} alt="" />
                <p>Whisky Master Gold é uma bebida alcoólica destilada, que foi envelhecida em barris. O teor alcoólico de um whisky é de 40%.</p>
            </div>
            <div className='p-5 '>
                <p className='mb-5'>Aguardente de Cana Baianinha 960 ml. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense..</p>
                <img className="bg-light m-2" src={baianinha} alt="" />
            </div>      
        </div>
        </>
    )
}

export default ProdutosHome