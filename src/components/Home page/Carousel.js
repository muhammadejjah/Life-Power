import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';

import ad from "../../images/ad.png"; 
function CarouselAd() {

    
    const [index, setIndex] = useState([
        { img: ad },
        { img: "https://c4.wallpaperflare.com/wallpaper/339/998/542/space-landscape-planet-1920-x-1080-wallpaper-preview.jpg" },
        { img: ad },
        { img: "https://c4.wallpaperflare.com/wallpaper/339/998/542/space-landscape-planet-1920-x-1080-wallpaper-preview.jpg" },
    ]); //for test


    const captionsShow = index.map((el, idx) => {
        return (
            <Carousel.Item interval={5000} key={idx}>
                <img
                    className="d-block w-100  Carousel-img  "
                    
                    src={el.img}
                    alt={el.img}
        />                      
            </Carousel.Item>
        )
    })
    
    return (
        <Container>
        <div className='mb-5 pt-3 ' style={{marginTop:"70px"}}>
            <Carousel fade controls={false} touch={true}  >
                {captionsShow}
            </Carousel>
        </div>
        </Container>

    );
}

export default CarouselAd;