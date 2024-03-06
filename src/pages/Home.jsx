import Menu from '../components/Menu'
import Banner from '../components/Banner'
import QuemSomos from '../components/QuemSomos';
import OndeEstamos from '../components/OndeEstamos';
import ProdutosHome from '../components/ProdutosHome';
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
            <div className='d-flex justify-content-center aling-items-center p-5'>
                <Link to={'/Cardapio'}><button id='btn' className=" btn btn-lg btn-secondary ">Clique Aqui</button></Link>
            </div>
            
            
            
        </>
    )

}

export default Home;