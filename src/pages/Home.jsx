import Menu from '../components/Menu'
import Banner from '../components/Banner'
import QuemSomos from '../components/QuemSomos';
import OndeEstamos from '../components/OndeEstamos';

function Home(){
    return(
        <>
            <Menu></Menu>
            <Banner ></Banner>
            <QuemSomos></QuemSomos>
            <OndeEstamos></OndeEstamos>
        </>
    )

}

export default Home;