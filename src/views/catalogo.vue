<script>
    import {mapStores } from "pinia";
    import {tienda} from "../stores/gods";

    export default {
        data() {
            return {
                palabra:'',
                desespero: []
            };
        },

        name: 'App',

        computed: {
            ...mapStores(tienda),

            catalog() {
                return this.productsStore.getFilterProducts;
            },
          
            productsGet(){
                return this.productsStore.getProducts;
            }
        },

        mounted() {
            this.productsStore
            this.desespero = this.catalog;
            this.productsStore.mostrar();
       
           

        },methods:{
            volr () {
                this.productsStore.funcy('palabra', this.palabra);

                //console.log(this.bus)
            }
        },

        

    };
</script>
<template>

    <body>

        <section class="filter flex">
            <div class="filter__fondo flex">
                <input type="text" class="filter__fondo__search" placeholder="Buscar" id="palabra" v-model="palabra" @change="() => volr()">
                <div class="filter__fondo__filtrar flex">
                    <p class="filter__fondo__filtrar__texto">Filtrar Por tipo</p>
                    <select name="filtro" class="filter__fondo__filtrar__filtro" id="cat">
                        <option value="">todo</option>

                        <option value="Grua">Grua</option>
                        <option value="Excavadora">Excavadora</option>
                        <option value="Camiones">Camiones</option>
                        <option value="otros">otros</option>

                    </select>
                </div>
                <div class="filter__fondo__filtrar flex">
                    <p class="filter__fondo__filtrar__texto">Filtrar Por zona</p>
                    <select name="filtro" class="filter__fondo__filtrar__filtro" id="zone">
                        <option value="">Todo</option>
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
                </div>

                <div class="filter__fondo__ordenar flex">
                    <p class="filter__fondo__ordenar__texto">Ordenar Por</p>
                    <select name="oden" class="filter__fondo__ordenar__orden" id="orden">
                        <option value="">todo</option>

                        <option value="asc">barato</option>

                        <option value="desc">caro</option>

                    </select>
                </div>
            </div>
        </section>
        <section class="products" id="products">

            <div class="tarjeta">
                <RouterLink v-for="product in productsGet" :key="product.name" :to="`/ppp/${product.name}`" class="si">
                    <div class="tarjeta__cont">
                        <div class="tarjeta__cont__img">
                        <img :src='product.image' alt="preview" class="img">
                    </div>
                        <h4 class="tarjeta__cont">{{ product.name }}</h4>
                        <p class="tarjeta__cont">${{ product.price}}</p>
                        <p class="tarjeta__cont">{{ product.type}}</p>
                        <button class="tarjeta__cont__buy">🛒</button>
                    </div>

                </RouterLink>
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


    input {
        height: 20px;
        border: none;

        background-repeat: no-repeat;
        background-position: right;
        font-size: 1.1em;

        &[type=text] {
            padding: 20PX;
            border-radius: 40px;
        }

    }

    .search {
        &__bar {
            padding: 10px 10px;
            height: 100%;
        }
    }

    .barra {
        background-color: $c1;
        height: 1px;
    }

    select {

        margin-top: 30px;
        justify-content: center;
        margin-bottom: 30px;
        border: none;
        align-items: center;
        font-size: 1.6em;
        border-radius: 40px;
        background-repeat: no-repeat;
        background-position: right;
        padding: 10PX;
        width: 250px;
        height: 60px;
    }
    .products{
        padding: 0 100px 0 100px;
    }

    .filter {
        background-color: $c5;
        height: 100%;
        margin: 100px;
        border-radius: 50px;

        &__fondo {
            width: 100%;

            border-radius: 40px;
            justify-content: space-evenly;
            align-items: center;

            &__filtrar {
                align-items: center;

                &__texto {

                    font-size: 1.6em;
                    padding-right: 20px;
                }
            }

            &__ordenar {
                align-items: center;

                &__texto {

                    font-size: 1.6em;
                    padding-right: 20px;
                }
            }
        }
    }

    .si {
        display: flex;
        margin: 40px;
        background-color: $c3;
    }

    .tarjeta {

        display: flex;
        flex-wrap: wrap;

        &__cont {
            width: 250px;
            font-size: 1.5vw;
            margin-top: 20px;
            position: relative;

            &__img{
            width: 100%;
        }

            &__buy {
                position: absolute;
                bottom: -40;
                width: 100%;
                height: 40px;
            }
        }
    }

    .img {
        width: 100%;
        height: 10vw;

    }

    @media all and (max-width: 500px) {
        .filter {
        background-color: $c5;
        height: 100%;
        margin: 100px;
        border-radius: 50px;

        &__fondo {
            width: 100%;

            border-radius: 40px;
            justify-content: space-evenly;
            align-items: center;

            &__filtrar {
                align-items: center;
                display: none;

                &__texto {

                    font-size: 1.6em;
                    padding-right: 20px;
                }
            }

            &__ordenar {
display: none;

                align-items: center;

                &__texto {

                    font-size: 1.6em;
                    padding-right: 20px;
                }
            }
        }
    }
   
    

    }
</style>