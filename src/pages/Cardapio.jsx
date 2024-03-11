import { CardGroup } from 'react-bootstrap'
import Card from '../components/Cards'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import cachaca51 from '../images/51.svg'
import velhoBarreiro from '../images/Velho-barreiro.svg'
import './Cardapio.css'
import IconeWhatsapp from '../components/IconeWhatsapp'

function Cardapio() {
    return (
        <section id='cardapio'>
            <Menu></Menu>
            <Banner ></Banner>
            <div id='cardapio-faixa' className='bg-light p-3 d-flex justify-content-around align-items-center'>
                <img className='garrafa' src={cachaca51} alt="" />
                 <h1 className='d-inline'>Cardapio</h1>
                <img className='garrafa' src={velhoBarreiro} alt="" />

            </div>
            <div className='d-flex flex-wrap justify-content-around align-items-around gap-5 m-2'>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src='' title='51' preco="59,90" text=" Graduação alcoólica 39%.Conteúdo 965ml. Cachaça Nacional"></Card>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>

            </div>
            <IconeWhatsapp></IconeWhatsapp>

        </section>
    )
}

export default Cardapio