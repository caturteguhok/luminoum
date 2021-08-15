import React from "react";
import Slider from "react-slick";
import { SliderStyled } from "../home.styles";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

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
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 1200,
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
      src="https://luminoum.com/dev/images/banner-home-luminoum.jpg"
      alt=""
     />
    </div>
    <div>
     <img
      src="https://luminoum.com/dev/images/banner-home-lumislim.jpg"
      alt=""
     />
    </div>
   </Slider>
  </SliderStyled>
 );
};

export default SlideshowPartial;
