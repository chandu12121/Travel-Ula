import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./index.css";
const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
  
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
  

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <PrevArrow />,  
        nextArrow: <NextArrow />       
    };

  const images = [
    "https://media.istockphoto.com/id/168252293/photo/safari-car-is-waiting-for-crossing-elephants.jpg?s=1024x1024&w=is&k=20&c=fRY-r5V1J3EzeVtqS1Ax5hxYC4uZaCloZm6RjMK14fQ=",
    "https://images.unsplash.com/photo-1610982330184-b26f7ea46541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1532199286643-4b8e3f4a2fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/140447435/photo/african-jewellery-on-a-female-samburu-tribe-kenya-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=ucHfkOrwdO1aKwuW0zTXbg3Ow6zmev_slXJnm1P3In4=",
  ];

  return (
    <div style={{ width: "100%", margin: "auto", paddingTop:"10%"}}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
