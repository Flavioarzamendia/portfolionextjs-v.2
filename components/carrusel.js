import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrusel = ({images}) => {
  
    return (
        <Carousel showStatus={false}
        showIndicators={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        className="relative">
          {images.map((image, index) => (
        <div key={index} className="relative ">
          <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <p className="text-lg font-bold">{image.title}</p>
            <p className="text-sm">{image.description}</p>
          </div>
        </div>
      ))}
        </Carousel>
      );
  
}

export default Carrusel