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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
 };
 return (
  <>
   <SliderStyled>
    <Slider {...settings}>
     <div>
      <img src="https://picsum.photos/id/10/1920/1080" alt="" />
     </div>
     <div>
      <img src="https://picsum.photos/id/0/1920/1080" alt="" />
     </div>
     <div>
      <img src="https://picsum.photos/id/1/1920/1080" alt="" />
     </div>
     <div>
      <img src="https://picsum.photos/id/100/1920/1080" alt="" />
     </div>
     <div>
      <img src="https://picsum.photos/id/1000/1920/1080" alt="" />
     </div>
     <div>
      <img src="https://picsum.photos/id/1001/1920/1080" alt="" />
     </div>
    </Slider>
   </SliderStyled>
  </>
 );
};

export default SlideshowPartial;
