import { CardGroup } from 'react-bootstrap'
import Card from '../components/Cards'
import Menu from '../components/Menu'

function Cardapio() {
    return (
        <>
            <Menu></Menu>
            <div className='d-flex flex-wrap justify-content-around align-items-around gap-3 m-2'>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src='' title='51' preco="59,90" text=" Graduação alcoólica 39%.Conteúdo 965ml. Cachaça Nacional"></Card>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src='' title='Kariri' preco="59,90" text="Aguardente de Cana Kariri 960 ml. Armazenada em tonéis de bálsamo. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>

        </>
    )
}

export default Cardapio