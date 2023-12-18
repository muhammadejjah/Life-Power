import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import { useSelector } from 'react-redux';
import { BaseURL } from '../../Api/Api';
function CarouselAd() {
    const { sliderImages } = useSelector(state => state.HomeSlice)
    const captionsShow = sliderImages.map((el, idx) => {
        return (
            <Carousel.Item interval={2000} key={idx}>
                <img
                    className="d-block w-100  Carousel-img  "
                    src={`${BaseURL}${el}`}
                    alt={el}
                />
            </Carousel.Item>
        )
    })

    return (
        <Container>
            <div className='mb-5 pt-3 ' style={{ marginTop: "70px" }}>
                <Carousel fade controls={false} touch={true}  >
                    {captionsShow}
                </Carousel>
            </div>
        </Container>
    );
}

export default CarouselAd;