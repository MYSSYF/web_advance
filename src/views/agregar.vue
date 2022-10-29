<script>
import { mapStores } from "pinia";
import { tienda } from "../stores/gods.js";

  export default{
    components: {
  },
  inf() {
    return {
      name: "",
      zone: "",
      type: "",
      hay:"",
      description: "",
      price: "",
      imgURL: "null"
    };
  },

  computed: {
    ...mapStores(tienda),
    
  },

  methods: {
      createNewProduct() {

      const newProduct = {
        name: this.name,
        zone: this.zone,
        type: this.type,
        hay: this.hay,
        description: this.description,
        price: this.price,
        image: this.imgURL
      };
 
      //this.productsStore.newProduct(newProduct);
      this.productsStore.subir(newProduct)
      
      this.name = '';
      this.zone = '';
      this.type = '';
      this.hay = '';
      this.description = '';
      this.price = '';


    },

    readImage(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.addEventListener("load", () => {this.imgURL = reader.result;});
    },
    
  }
  }
</script>

<template>

  <div class="space flex">
    <form id="forma" class="flex">

  <label for="name" class="item1 flex">Nombre del producto</label>
  <input type="text" id="name" class="item2" v-model="name">
  
  <label for="lugare" class="item1">Lugar</label>
  <select name="lugare" id="lugare" class="items LFB" v-model="zone">
    <option value="Amazonas">Amazonas</option>
    <option value="Yopal">Yopal</option>
    <option value="Bogota">Bogota</option>
    <option value="Valle del cauca">Valle del cauca</option>
    <option value="Medellin">Medellin</option>
    <option value="Pasto">Pasto</option>
    <option value="Inirida">Inirida</option>
    <option value="Santa Marta">Santa Marta</option>
    <option value="Brasil">Brasil</option>
    <option value="Amazonas 2">Amazonas 2</option>
  </select>

  <label for="type" class="item1">Lugar</label>
  <select name="type" id="type" class="items LFB" v-model="type">
    <option value="Grua">Grua</option>
    <option value="Excavadora">Excavadora</option>
    <option value="Camiones">Camiones</option>
    <option value="otros">otros</option>

  </select>

  <label for="price" class="item1" >precio del producto</label>
  <input type="number" id="price" class="item2"  v-model="price" >
  
  <label for="disponibility" class="item1">Hay disponibilidad?</label>
  <select name="disponibility" id="disponibility" class="items LFB" v-model="hay">
    <option value="true">si</option>
    <option value="false">No</option>
  </select>
  
  <label for="description" class="item1">descripcion</label>
  <input type="textarea" id="description" class="item2" v-model="description">
  
  <label for="imgs" class="item1">Imagen correspondiente</label>
  <input type="file" id="imgs" class="item3"  multiple="multiple" @change="readImage">

  <button type="submit" class="LFB flex" @click.prevent="(e) => createNewProduct()">enviar</button>
</form>

</div>

</template>

<style lang="scss">

$main-font: 'Saria',
sans-serif;
$main2-font: 'Roboto',
sans-serif;
$main3-font: 'Sarpanch',
sans-serif;
$c1: #000000;
$c2: #828282;
$c3: #ffb02d;
$c4: #ffffff;
$c5: #da441a;


.flex {
    display: flex
}
.space{
  margin: 0;
  height: 800px;
justify-content: center;
}

#forma {
  
width: 100%;
height: 520px;
  border-radius: 30px;
  margin: 100px 300px 100px 300px;
  flex-wrap: wrap;
    padding: 50px;
    flex-direction: column;
    background: $c3;

}


.item2{
  margin-top: 30px;
    justify-content: center;
      margin-bottom: 30px;
      border: none;
      justify-content: center;
      font-family: $main-font;
      font-size: 1.6em;
      border-radius: 40px;
      background-repeat: no-repeat;
      background-position: right;
      padding: 10PX;
      width: 250px;
}

label{
    font-size: 1.5em;
    margin-bottom: 10PX;
    font-family: $main2-font;
}
.LFB {
    margin-top: 30px;
    justify-content: center;
      margin-bottom: 30px;
      border: none;
align-items: center;
      font-family: $main-font;
      font-size: 1.6em;
      border-radius: 40px;
      background-repeat: no-repeat;
      background-position: right;
      padding: 10PX;
      width: 250px;
      height: 80px;

      &:hover {
          background-color: $c2;
          border-radius: 20px;
      }
  }
  @media all and (max-width: 500px) {
    #forma {
  
  width: 100%;
  height: 100%;
    border-radius: 30px;
    margin: 100px 300px 100px 300px;
    flex-wrap: nowrap;
      padding: 50px;
      flex-direction: column;
      background: $c3;
  
  }

  .space{
  margin: 0;
  height: 100%;
justify-content: center;
}

  }


</style>
