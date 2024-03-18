
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards(card) {
    return (
        <>
            <Card id='card' className='d-flex flex-wrap' >
                <Card className='m-1 w-50 my-auto '> 
                    <img id='img-card' className='w-100' src={card.src} alt={card.alt} />
                </Card>
                <Card.Body id='card-body' className=' w-50'>
                    <Card.Title className='p-1 text-center'>{card.title}</Card.Title>
                    <Card.Text style={{ height: 'fit-content' }} className='mt-2 w-100'>
                        {card.text}
                    </Card.Text>
                    <Card.Footer className="my-2 d-flex justify-content-between align-items-center ">
                        <span>preço</span> <span>{card.preco}</span>
                    </Card.Footer>
                    <a href="https://api.whatsapp.com/send?phone=5511939460060&text=olá+quero+comprar+uma+cachaça+&"><Button className=' mx-auto w-100' variant="primary">Comprar</Button></a>
                </Card.Body>

            </Card>
        </>
    )
}

export default Cards