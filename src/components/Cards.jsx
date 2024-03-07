
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards(card) {
    return (
        <>
            <Card id='card' className='d-flex flex-wrap' >
                <Card className='p-2 w-50 my-auto '> 
                    <img className='w-100' src={card.src} alt="" />
                </Card>
                <Card.Body id='card-body' className=' w-50'>
                    <Card.Title className='p-2 text-center'>{card.title}</Card.Title>
                    <Card.Text style={{ height: 'fit-content' }} className='mt-2 w-100'>
                        {card.text}
                    </Card.Text>
                    <Card.Footer className="my-2 d-flex justify-content-between align-items-center ">
                        <span>preço</span> <span>{card.preco}</span>
                    </Card.Footer>
                    <Button className=' mx-auto w-100' variant="primary">Comprar</Button>
                </Card.Body>

            </Card>
        </>
    )
}

export default Cards