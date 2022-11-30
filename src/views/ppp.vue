<template>
  <section class="donde">

    <div class="machin">
      <div class="machin__img">
        <img :src=this.actual.image alt="preview" class="machin__img2" @click="volr">
      </div>
      
      <div class="machin__info">
        <p class="t"> {{this.actual.name}}</p>
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
  <section class="coment">
    <p class="tip">Escribe comentarios</p>
<div class="escribe">
  <input type="textarea" class="put" v-model="coment">
  <button type="submit" class="LFB flex" @click.prevent="creaComentario">enviar</button>
</div>
<p class="tip">Comentarios</p>
<div class="mira">

                <div v-for="coments in sarcomentare" :key="coments.id2"  class="si" >
       
<div class="depreso">

  <h2 class="cont">{{ coments.user }}</h2>
  <p class="fas">{{coments.coment}}</p>
</div>
  <button @click.prevent="matar">x</button>
      
                </div>
            </div>
  </section>
  </template>

  <script>

  import { mapStores } from "pinia";
  import { tienda } from "../stores/gods";
  import {useAuthenticationStore} from '../stores/verificarU'
  
  export default {
    data() {
      return { actual: {

      } };
    },
    inf() {
    return {
      provis: [],
      producto: "",
      usuario: "",
      comentario: "",
      merp: true,
    };
  },


    computed: {
      ...mapStores(tienda, useAuthenticationStore),

      sarcomentare(){
                return this.productsStore.getComents;
               
            },

    },


  mounted(){
    this.productsStore.mostrarC();

       

    this.productsStore.zapato(this.$route.params.productId) 
              this.actual = this.productsStore.single
              console.log(this.actual)
 
  },
  methods:{
            volr () {
              this.productsStore.zapato(this.$route.params.productId) 
              this.actual = this.productsStore.single
              console.log(this.actual)

             
            },
            trasbalador(){

                    console.log(this.productsStore.yap())
    
            },

            async creaComentario() {
              const las = this.authenticationStore.validar2()
              const gas = await this.productsStore.getUser(las)
            
              console.log(gas)

const newComent = {
  producto: this.actual.name,
  usuario: gas.name,
  comentario: this.coment,


};

this.productsStore.casualComent(newComent)

    this.producto = '';
    this.usuario = '';
    this.comentario = '';


},
matar(){

  //this.productsStore.KILL(sep)
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
    .coment{
      background-color: $c3;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
    }
    .put{
      width: 90%;
    }
    .si{
      margin: 10px;
      background-color: #ffffff;
      display: flex;
 
    }
    .cont{
display: flex;
width: 200px;
background-color: #828282;
padding-left: 30px;
    }
    .fas{
      display: flex;
      font-size: 1.3em;
      margin: 20px;
 
    }
    .depreso{
      width: 100%;
    display: flex;
    flex-direction: column;
    }
    .ti{
  font-size: 2em;
  margin-top:30px ;
 }
 .tip{
  display: flex;
  justify-content: center;
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

 .escribe{
  border-radius: 30px;
  display: flex;
  background-color: $c5;
margin: 20px;
  padding: 50px;
  align-content: space-between;
  justify-content: center;
  width: 70%;
  align-items: baseline;
 }
 .mira{
  border-radius: 30px;
  display: flex;
  background-color: $c5;
  margin: 20px;
  padding: 50px;
  align-content: space-between;
  flex-direction: column;
  justify-content: center;
  width: 70%;
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