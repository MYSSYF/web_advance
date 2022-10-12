<template>
    <Carousel :itemsToShow="2.95" :wrapAround="true">
    <Slide v-for="slide in macc" :key="slide">
      <div class="ofer">
        <img :src="slide.pic" class="ofer__pic">
        <h3 class="ofer__text">{{slide.name}}</h3>
        <h3 class="ofer__button">{{slide.price}}</h3>
     
      </div>
    </Slide>
  </Carousel>
  </template>
  
  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  
  export default {

    data() {
        return {
          macc: [
            {
                pic: '../place1.jpg',
                name: 'Bugggy',
                price: '99.98',
                
            },
            {
                pic: '../place1.jpg',
                name: 'Bugggy',
                price: '99.98',
            },
            {
                pic: '../place1.jpg',
                name: 'el unico diferente pa mostrar que funciona',
                price: '99.98',
            },
            {
                pic: '../place1.jpg',
                name: 'Bugggy',
                price: '99.98',
            },
                        {
                pic: '../place1.jpg',
                name: 'Bugggy',
                price: '99.98',
            },
            {
                pic: '../place1.jpg',
                name: 'Bugggy',
                price: '99.98',
            },
            {
                pic: '../place1.jpg',
                name: 'Bugggy',
                price: '99.98',
            },
            
          ],
        }
      },


    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  };
  </script>

<style lang="scss" >


    .title{

      font-size: 2em;
      text-align: center;
      padding: 3%;
    }

    .ofer{
      padding: 5%;

      &__text{

        padding: 1.5%;

      }
      &__pic{
        width: 300px;
        height: 400px;
      }
    }

  .carousel__slide > .ofer {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .ofer {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .ofer {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .ofer {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .ofer {
  transform: scale(1.1);
}

@media all and (max-width: 500px) {

.carousel{
  width: 100%;
}

  .carousel__slide > .ofer {

  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .ofer {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .ofer {

  transform: scale(0.9) translate(170px);
}
.carousel__slide--prev > .ofer {

  transform: scale(0.9) translate(-170px);
}
.carousel__slide--active > .ofer {

  transform: scale(1.1);
}
}


  </style>