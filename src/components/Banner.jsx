import Carousel from 'react-bootstrap/Carousel';
import ImageBannerHome from './ImageBannerHome';



function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
       <ImageBannerHome></ImageBannerHome>

      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;