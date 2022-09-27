<script>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'

  

  export default {
    components: {

    }
  }

</script>

<template>

  <header>
    <div class="header__part__1">
      <img src="..\logo.png" alt="nop" class="header__logo">
      <h2 class="tittle">DOMURA</h2>
    </div>
      <div class="header__part__2">
      <nav>
        <RouterLink to="/" class="item">INICIO</RouterLink>
        <RouterLink to="/catalogo" class="item">CATALOGO</RouterLink>
        <RouterLink to="/bugguy" class="item">INFO</RouterLink>
        <RouterLink to="/bugguy" class="item">CONTACTO</RouterLink>
        <RouterLink to="/agregar" class="item"><img src="..\Poff.png" alt="P" class="user"></RouterLink>
      </nav>
    </div>
      
  </header>

  <RouterView />
  <footer>
<h3>Copyright© 2022 MAQUINAS.ORG - Ningun derecho esta reservado.</h3>
<h3>Politica de privacidad     Terminos y condiciones</h3>
<h3>Protopagina creada por jose gabriel</h3>
</footer>
</template>

<style lang="scss">

$primary-color: rgb(136, 47, 47);

.header__part__1{
    display: flex;
  }
  .header__part__2{
    display: flex;
  }
  .tittle{
   margin-left: 40px;
    display: flex;
    align-items: flex-end;
    font-size: 4.0em;
  }
  .header__logo {
    display: flex;
    width: 8em;
    height: 8em;
  }

  header {
    padding: 20px;
    display: flex;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #FFB02D;
    height: 120px;
    width: 100%;
    justify-content: space-between;
  }
  nav{
    align-items:flex-end;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 1.7em;

  }
  a{
    text-decoration: none;
  }
  .item{
    margin: 0 20px 0 20px ;
  }
  .user{
    display: flex;
    width: 70px;
    height: 70px;
    margin-right: 40px;
  }
  footer{
    padding-top:50px ;
    color: white;
display:flex ;
background: $primary-color;
flex-direction: column;
align-items: center;
  }

  @media all and (max-width: 500px) {
    .header__part__2{
    display: none;
  }
    .tittle{
   margin-left: 40px;
    display: flex;
    align-items: flex-end;
    font-size: 4.0em;
  }
  .header__logo {
    display: flex;
    width: 6em;
    height: 6em;
  }

  header {
    padding: 20px;
    display: flex;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #FFB02D;
    height: 120px;
    width: 100%;
    justify-content: space-between;
  }
  nav{
 
    align-items:flex-end;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 1.7em;

  }

  .item{
    margin: 0 20px 0 20px ;
  }
  .user{
    display: flex;
    width: 70px;
    height: 70px;
    margin-right: 40px;
  }
  footer{
    padding-top:50px ;
display:flex ;
background: $primary-color;
flex-direction: column;
align-items: center;
  }


}

</style>
