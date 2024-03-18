import Menu from '../components/Menu'
import Banner from '../components/Banner'
import QuemSomos from '../components/QuemSomos';
import OndeEstamos from '../components/OndeEstamos';
import ProdutosHome from '../components/ProdutosHome';
import IconeWhatsapp from '../components/IconeWhatsapp'
import { Link } from 'react-router-dom';
import './Home.css';

function Home(){
    return(
        <>
            <Menu></Menu>
            <Banner ></Banner>
            <QuemSomos></QuemSomos>
            <div id='linhaamarela'/>
            <OndeEstamos></OndeEstamos>
            <ProdutosHome></ProdutosHome>
            
        </>
    )

}

export default Home;