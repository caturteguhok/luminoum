import React from "react";
import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { SliderStyled } from "../../home/home.styles";

function SamplePrevArrow(props) {
 const { className, onClick } = props;
 return <RiArrowLeftSLine className={className} onClick={onClick} size={100} />;
}

function SampleNextArrow(props) {
 const { className, onClick } = props;
 return (
  <RiArrowRightSLine className={className} onClick={onClick} size={100} />
 );
}

const SlideshowPartial = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
 };
 return (
  <SliderStyled>
   <Slider {...settings}>
    <div>
     <img
      src="https://via.placeholder.com/1920x1080.png?text=Slide+Item+1+at+luminoum.com"
      alt=""
     />
    </div>
    <div>
     <img
      src="https://via.placeholder.com/1920x1080.png?text=Slide+Item+2+at+luminoum.com"
      alt=""
     />
    </div>
    <div>
     <img
      src="https://via.placeholder.com/1920x1080.png?text=Slide+Item+3+at+luminoum.com"
      alt=""
     />
    </div>
    <div>
     <img
      src="https://via.placeholder.com/1920x1080.png?text=Slide+Item+4+at+luminoum.com"
      alt=""
     />
    </div>
    <div>
     <img
      src="https://via.placeholder.com/1920x1080.png?text=Slide+Item+5+at+luminoum.com"
      alt=""
     />
    </div>
    <div>
     <img
      src="https://via.placeholder.com/1920x1080.png?text=Slide+Item+6+at+luminoum.com"
      alt=""
     />
    </div>
   </Slider>
  </SliderStyled>
 );
};

export default SlideshowPartial;
