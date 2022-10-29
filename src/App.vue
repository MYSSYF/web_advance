<script>
  import {RouterLink,RouterView} from 'vue-router'
  import {mapStores} from 'pinia'
  import {useAuthenticationStore} from '../src/stores/verificarU'

  export default {
    data(){
return{
  nolog : true,
  showModal: false,
  email: "",
  contra: "",
  nombre: "",
  correo: "",
  pass: ""
}
    },
    computed: {
...mapStores(useAuthenticationStore)
    },
    methods:{
entra() {

  this.authenticationStore.SignIn(this.email, this.contra)

  //this.veridico.entra(this.email, this.contra)
},
cerrar(){
            this.authenticationStore.signOut()
        },
regis(){

    this.authenticationStore.SignUp(this.correo, this.pass, this.nombre)
},
mounted(){
  this.authenticationStore.validar()

}
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
        <RouterLink to="/agregar" class="item">INFO</RouterLink>
        <RouterLink to="/bugguy" class="item">CONTACTO</RouterLink>
        <button class="user" @click="showModal = true" v-if="nolog"><img src="..\Poff.png" alt="P" class="user"></button>

        <transition name="fade">
          <div class="modal" v-if="showModal">
            <div class="modal__back flex">
            <div class="regis flex">
                <form id="CreateUserForm">
                    <label for="name">Nombre</label>
                    <input type="text" placeholder="Nombre" name="name" class="CUF" v-model="nombre">
                    <label for="email">Correo Electronico</label>
                    <input type="email" placeholder="Correo Electronico" name="email" class="CUF" v-model="correo">
                    <label for="password">Contraseña</label>
                    <input type="password" placeholder="Contraseña" name="password" class="CUF" v-model="pass">

                    <button class="LF" @click.prevent="regis">REGISTRATE</button>
                </form>
            </div>
            <div class="loguin flex">
                <form id="loguinForm">
                    <label for="email">Correo Electronico</label>
                    <input type="email" placeholder="Correo Electronico" name="email" class="LF" v-model="email">
                    <label for="password">Contraseña</label>
                    <input type="password" placeholder="Contraseña" name="password" class="LF" v-model="contra">
                    <button class="LF" @click.prevent="entra">INGRESA</button>
                </form>
            </div>


              <button class="clos" @click="showModal = false">X</button>
            </div>
          </div>
        </transition>
      
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

.flex{
  display: flex;
}

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
    background: transparent;
    border: none !important;
    font-size:0;
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
.modal{
  z-index: 10;
  display: flex;
  background: #000000bd;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &__back{
    justify-content: center;
    background:  #FFB02D;
    width: 50%;
    height: auto;
    flex-direction: row;

  }
}
#CreateUserForm{
  display: flex;
  flex-direction: column;
  margin: 30px;

}
#loguinForm{
  display: flex;
  flex-direction: column;
  margin: 30px;
}
.CUF{
  margin: 10px 0 10px 0 ;
}
.LF{
  margin: 10px 0 10px 0 ;
}
input{
  align-items: center;
    margin-bottom: 30px;
    border: none;

    font-size: 1.6vw;
    border-radius: 40px;
    background-repeat: no-repeat;
    background-position: right;
    padding: 10PX;
    width: 250px;

    &:hover {
        background-color: #b47a3727;
        border-radius: 20px;
    }
}
.clos{
  font-size:1.5vw ;
  height: 50px;
  width: 50px;
  position: fixed;
  right: 600px;
}
</style>
