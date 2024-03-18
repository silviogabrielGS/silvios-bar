import { CardGroup } from 'react-bootstrap'
import Card from '../components/Cards'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import cachaca51 from '../images/51.svg'
import velhoBarreiro from '../images/Velho-barreiro.svg'
import './Cardapio.css'
import IconeWhatsapp from '../components/IconeWhatsapp'
import vb from '../images/img-cachacas-pequena/20240317_133926.jpg'
import paratudo from '../images/img-cachacas-pequena/20240317_133723.jpg'
import baianinha from '../images/img-cachacas-pequena/20240317_133855.jpg'
import paratiniblack from '../images/img-cachacas-pequena/20240317_133943.jpg'
import paratiniwhite from '../images/img-cachacas-pequena/20240317_134006.jpg'
import stolinov from '../images/img-cachacas-pequena/20240317_134024.jpg'
import catuaba from '../images/img-cachacas-pequena/20240317_134045.jpg'
import cantinhodovale from '../images/img-cachacas-pequena/20240317_134110.jpg'
import janaina from '../images/img-cachacas-pequena/20240317_134157.jpg'
import domus from '../images/img-cachacas-pequena/20240317_134252.jpg'
import natunobius from '../images/img-cachacas-pequena/20240317_134320.jpg'
import presidente from '../images/img-cachacas-pequena/20240317_135125.jpg'
import oldeight from '../images/img-cachacas-pequena/20240317_135139.jpg'
import gostosa from '../images/img-cachacas-pequena/20240317_135213.jpg'
import quentinho from '../images/img-cachacas-pequena/20240317_135229.jpg'
import mastergold from '../images/img-cachacas-pequena/20240317_135245.jpg'
import dreher from '../images/img-cachacas-pequena/20240317_135359.jpg'
import oldville from '../images/img-cachacas-pequena/20240317_135153.jpg'



function Cardapio() {
    return (
        <section id='cardapio'>
            <Menu></Menu>
            <Banner ></Banner>
            <div id='cardapio-faixa' className='bg-light p-3 d-flex justify-content-around align-items-center'>
                <img className='garrafa' src={cachaca51} alt="" />
                 <h1 className='d-inline'>Catálogo</h1>
                <img className='garrafa' src={velhoBarreiro} alt="" />

            </div>
            <div className='d-flex flex-wrap justify-content-around align-items-around gap-5 m-2'>
                <Card src={vb} title='Velho barreiro' preco="59,90" text="Aguardente de Cana Velho barreiro 910 ml. A Velho Barreiro é conhecida como uma das cachaças mais tradicionais do Brasil."></Card>
                <Card src={paratudo} title='Paratudo' preco="15,90" text="Paratudo Raízes Amargas 900ml Aperitivo Paratudo com Jatobá e Raízes. Bebida alcoólica de jurubeba suave."></Card>
                <Card src={baianinha} title='Baianinha' preco="19,90" text="Aguardente de Cana Baianinha 960 ml. Graduação alcoólica 40%. Conteúdo 960ml. Aguardente cearense."></Card>
                <Card src={paratiniblack} title='Paratini Tinto' preco="9,90" text=" 900 ml. Possui um sabor adocicado e um paladar requintado no sabor tinto. Segue a linha mais jovem e é uma bebida para preparação de coqueteis."></Card>
                <Card src={paratiniwhite} title='Paratini Branco' preco="9,90" text="900 ml. O Vermouth Paratini produzido especialmente para drinks e receitas tradicionais. Dona de um sabor robusto e adocicado"></Card>
                <Card src={stolinov} title='Stolinov' preco="19,90" text="Vodka 900 ml. Uma opção perfeita quando se fala em produção de drinks"></Card>
                <Card src={catuaba} title='Catuaba' preco="8,90" text="Catuaba Randon 900ml: Uma bebida amada pelos brasileiros, não podendo faltar nas festas! Composta de vinho doce, guaraná e catuaba."></Card>
                <Card src={cantinhodovale} title='Cantinho do Vale' preco="4,90" text="Cantinho do Vale Tinto Suave 880ml Coquetel de vinho tinto suave com fermentado de maçã e suco de uva."></Card>
                <Card src={janaina} title='Janaina' preco="14,90" text="Uma cachaça caracterizada por fragrâncias intensas e sabor marcante, ideal para a fabricação de drinks variados e refrescantes misturas tropicais."></Card>
                <Card src={domus} title='Domus' preco="15,90" text=" O conhaque Domus é elaborado a partir de gengibre. Apresenta sabor e aroma suaves, coloração transparente e pode ser ingerida pura ou mesmo em drinks."></Card>
                <Card src={natunobius} title='Natu Nobilis' preco="39,90" text="O Aperitivo de Whisky Natu Nobilis é uma equilibrada mistura de maltes e destilados nacionais da mais alta qualidade"></Card>
                <Card src={presidente} title='Presidente' preco="14,90" text="Conhaque Presidente. destilado alcoólico da cana de açúcar. Possui infusões naturais de ameixas, uvas e gengibre"></Card>
                <Card src={oldeight} title='Old Eight' preco="39,90" text="Whisky Old Eight 1000 Ml, Tipo de álcool: Single malt scotch, Perfume harmonioso com notas de madeira e turfa."></Card>
                <Card src={gostosa} title='Gostosa' preco="14,90" text="Licor de Menta 980ml. Bebida densa, brilhante e extremamente delicada. Um conjunto de aromas e sabores exclusivos e tipicamente regionais"></Card>
                <Card src={quentinho} title='Quentinho Gengibre' preco="14,90" text="Vinho Gengibre Quentinho 600mlCelebre a vida ao lado de pessoas que você gosta, celebre a vida com Gengibre Quentinho."></Card>
                <Card src={mastergold} title='Master Gold' preco="19,90" text="Whisky Master Gold é uma bebida alcoólica destilada, que foi envelhecida em barris. O teor alcoólico de um whisky é de 40%."></Card>
                <Card src={dreher} title='Dreher' preco="19,90" text="Conhaque Dreher 900ml. Aguardente composta com gengibre, destilado alcóolico de cana-de-açúcar e extrato vegetal aromático de gengibre"></Card>
                <Card src={oldville} title='Old Ville' preco="29,90" text="Destilado alcoólico simples de cana-de-açucar retificado, malt whisk, água potável,extrato natural de carvalho e corante caramelo"></Card>
             

            </div>
            <IconeWhatsapp></IconeWhatsapp>

        </section>
    )
}

export default Cardapio