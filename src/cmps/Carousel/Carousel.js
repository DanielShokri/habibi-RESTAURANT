import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel.css'


export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      variableWidth: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://abrokenbackpack.com/wp-content/uploads/2019/06/israeli-food-min.png" alt=""/>
          </div>
         
          <div>
          <img src="https://icdn2.themanual.com/image/themanual/shakshuka-brunch-at-haachim-restaurant-tel-aviv-v2.jpg" alt=""/>
          </div>

          <div>
          <img src="https://cdn.fedweb.org/fed-28/2/food.jpg" alt=""/>
          </div>
          
          <div>
          <img src="https://loveincstatic.blob.core.windows.net/lovefood/Full%20guide%20to%20Israeli%20food/Falafel-israel-food-guide.jpg" alt=""/>
          </div>

          <div>
          <img src="https://www.peregrineadventures.com/blog/wp-content/uploads/2018/10/suad-kamardeen-754891-unsplash-1.jpg" alt=""/>
          </div>

          <div>
          <img src="https://mayanotisrael.com/wp-content/uploads/2017/11/shakshuka-superJumbo-v2.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
