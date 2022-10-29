<template>
  <section class="donde">

    <div class="machin">
      <div class="machin__img">
        <img :src=this.actual.image alt="preview" class="machin__img2" @click="volr">
      </div>
      
      <div class="machin__info">
        <p class="t"> {{$route.params.productId}}</p>
        <p class="inf"> {{ this.actual.description }}</p>
        <p class="ti">tipo de maquina</p>
        <p class="inf">{{this.actual.type}}</p>
        <p class="ti">zona de prestamo</p>
        <p class="inf">{{this.actual.zone}}</p>
        <p class="ti">precio</p>
        <p class="inf"> {{this.actual.price }}</p>    
        <button class="buy" >🛒</button>
      </div>
      
    </div>
  </section>
  </template>

  <script>

  import { mapStores } from "pinia";
  import { tienda } from "../stores/gods";
  
  export default {
    data() {
      return { actual: {

      } };
    },

    computed: {
      ...mapStores(tienda),
      
    },


  mounted(){

    this.productsStore.zapato(this.$route.params.productId) 
              this.actual = this.productsStore.single
              console.log(this.actual)
 
  },
  methods:{
            volr () {
              this.productsStore.zapato(this.$route.params.productId) 
              this.actual = this.productsStore.single
              console.log(this.actual)
             
            }
        },
  };
  </script>
    
    <style lang="scss">
    $c1: #000000;
    $c2: #828282;
    $c3: #ffb02d;
    $c4: #ffffff;
    $c5: #da441a;
    $f1: 'Verdana, Geneva, Tahoma, sans-serif';
    $f2 : 'Roboto';
    
    .donde{
display: flex;
justify-content: center;
    }
    
    .ti{
  font-size: 2em;
  margin-top:30px ;
 }
 .inf{
  font-size: 3em;
 }

 .machin{
  border-radius: 30px;
  display: flex;
  background-color: $c5;
  margin: 100px;
  padding: 50px;
  align-content: space-between;
  justify-content: space-evenly;
  width: 70%;


&__info{
  padding: 20px;
  background-color: $c3;
font-family: 'Roboto', sans-serif;
}
&__img{
  border-radius: 30px;
}
&__img2{
  height: 50em;
  width: 50em;
}
 }

 .buy{
  margin-top: 40px;
width: 100%;
height: 40px;
}
    
 .t{

  font-size: 5em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
 }
 @media all and (max-width: 500px) {
  .machin{
  border-radius: 30px;
  display: flex;
  background-color: $c5;
  flex-direction: column;
  margin: 100px;
  padding: 50px;
  align-content: space-between;
  justify-content: space-evenly;
  width: 70%;


&__info{
  padding: 20px;
  background-color: $c3;
font-family: 'Roboto', sans-serif;
}
&__img{
  border-radius: 30px;
}
&__img2{
  height: 
  20em;
  width: 100%;
}
 }
 .t{

font-size: 3em;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

.ti{
  font-size: 0.6em;
  margin-top:30px ;
 }
 .inf{
  font-size: 1em;
 }

 }

    </style>