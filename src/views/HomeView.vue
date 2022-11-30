<script>
import land from '../components/land.vue'

export default {
components:{
  land  
}
};



</script>

<template>
  <body>
    <section class="banner flex">
      <img src="../assets/ban.png" alt="no" class="ban_img" />
      <div class="block"></div>
      <div class="text">
        <P class="t1">SERIES 7</P>
        <p class="t2">la nueva serie, 7 veces mas poderosa</p>
      </div>
    </section>
    <section class="info flex">
      <div class="mision flex">
        <div class="mision__sub">
          <h2 class="mision__sub__title flex">LIDERES EN MQUINARIA</h2>
          <p class="mision__sub__text flex">
            lo que inicio como la caida de una gran firma constructuro, seria el
            inicio de una oportunidad para un nuevo modelo de negocios, desde
            ese entonces nos convertimos en la alternativa #1 para las
            constructores
          </p>
        </div>
        <img src="../assets/cons.jpg" alt="no" class="mision__img flex" />
      </div>
    </section>
    <section class="ofertas">
        <h2 class="ofertas__titles">OFERTAS</h2>
        <div class="ofertas__list flex">
          <land/>

        </div>
    </section>
  </body>
</template>

<style lang="scss">
$c1: #000000;
$c2: #828282;
$c3: #ffb02d;
$c4: #ffffff;
$c5: #da441a;
$f1: 'Verdana, Geneva, Tahoma, sans-serif';
$f2 : 'Roboto';

.flex {
  display: flex;
}
p {
  margin: 0;
}

body {
  background-image: url("../assets/fan.jpg");
  height: 100%;
  margin: 0px;
}
.text {
  left: 20px;
  bottom: 20px;
  position: absolute;
  color: rgb(255, 238, 227);
}

.t1 {
  font-size: 9em;
  font-family: $f1;
}
.t2 {
  font-size: 4em;
  font-family: $f2;
}

.ban_img {
  width: 100%;
  height: 800px;

}
.block {
  left: 0;
  top: 40;
  position: absolute;
  width: 100%;
  height: 800px;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(0, 0, 0));
  opacity: 50%;
}

.info {
  margin: 50px 30px 30px 30px ;
  justify-content: center;

}
.mision {
justify-content: space-evenly;
  width: 1500px;
  background: $c5;
  padding: 30px;
  border-radius: 20px;

  &__sub {
    background: #ffb02d;
    border-radius: 20px;
    width: 700px;
    padding: 30px;
    &__title {
justify-content: center;
font-size: 3em;
text-align: center;
    }
    &__text{
justify-content: center;
font-size: 2.5em;
padding: 0 60px 0 60px;
text-align: center;
    }
  }
  &__img {
    width: 500px;
    border-radius: 30px;
  }
}
.ofertas{
    background: $c3 ;
    width: 100%;
    height: 100%;
    &__titles{
        padding-top:50px ;
        text-align: center;
        font-size: 3em;
    }
    &__list{

        justify-content: center;
        &__main{
width: 300px;
height: 400px;

        }

    }
}
@media all and (max-width: 500px) {
  .ban_img{
    height: 300px;
  }
  .block {
  left: 0;
  top: 40;
  position: absolute;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(0, 0, 0));
  opacity: 50%;
}

  .text {
  left: 2px;
  bottom: 1220px;
  position: absolute;
  color: rgb(255, 238, 227);
}

.t1 {
  font-size: 4.5em;
  font-family: $f1;
}
.t2 {
  display: none;
  font-size: 2em;
  font-family: $f2;
}


  .mision {
    align-items: center;
    flex-direction: column;
justify-content: space-evenly;
  width: 100%;
  background: $c5;
  padding: 30px;
  border-radius: 20px;

  &__sub {
    margin: 0;
    background: #ffb02d;
    border-radius: 20px;
    width: 100%;

    &__title {
justify-content: center;
font-size: 3em;
text-align: center;
    }
    &__text{
justify-content: center;
font-size: 1.5em;
padding: 0 60px 0 60px;
text-align: center;
    }
  }
  &__img {
    width: 100%;
    border-radius: 30px;
  }
}
}

</style>