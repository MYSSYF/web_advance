import {defineStore} from "pinia";
import { db,} from "../firebase"
import {  doc, setDoc ,collection,getDocs } from "firebase/firestore"; 


export const tienda = defineStore("products", {
    state: () => ({
        products: [{
                'id': 'excavadora',
                'name': 'excavadora',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'tu excavadora estandar, saca tierra, pone tierra, y se nueve ams rapido de lo que crees',
                'price': 800000,
                'image': 'https://www.recambiosdemaquinariaop.com/wp-content/uploads/2020/12/excavadora-hidraulica.jpg'
            },
            {
                'id': 'niveladora',
                'name': 'niveladora',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'es como una aplanadora pero mas ancha y sin tnto peso, usala para que tus cosas sueltas no solidas queden niveladas',
                'price': 200000,
                'image': 'https://www.euroimplementos.net/wp-content/uploads/2018/05/niveladora-articulada-6-1024x768.jpg'
            },
            {
                'id': 'compactadora',
                'name': 'compactadora',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'ni tu ,ni yo sabiamos que era compactadora en lugar de aplanadora, pero aqui estamos',
                'price': 1000000,
                'image': 'http://victoryepes.blogs.upv.es/files/2018/12/Rodillo.png'
            },
            {
                'id': 'grua',
                'name': 'grua',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'es una grua convencional, no muy larga, no muy pequeña ideal para subir 17 pisos y entrar silenciosamente',
                'price': 1500000,
                'image': 'https://ultras.com.co/wp-content/uploads/2021/05/alquiler-grua-pyh-cali-yumbo.jpg'
            },
            {
                'id': 'grua-de-torre',
                'name': 'grua de torre',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'una grua muy larga y estatica, solo que la gente no saben que las movemos de manera cuantica',
                'price': 3000000,
                'image': 'https://cycequipos.com/wp-content/uploads/2018/05/T-Grua-1.jpg'
            },
            {
                'id': 'montacargas-plus',
                'name': 'montacargas plus',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'es lo mas moderno que tenemos y es un montacargas ligeramente mas potente',
                'price': 400000,
                'image': 'https://www.loxamhune.com/wp-content/uploads/2022/10/lxmh-product-manipulador-telescopico-18-500x667.jpg'
            },
            {
                'id': 'tanqueta',
                'name': 'tanqueta',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'esta es robada, no tenemos los papeles y ustedes no tienen pruebas, pero si la quieres es toda tuya',
                'price': 30000,
                'image': 'https://theobjective.com/wp-content/uploads/2021/11/012826/bmr-990x640-1.jpg'
            },
            {
                'id': 'volqueta',
                'name': 'volqueta',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'el camion de carga confiable, de verdad te puedes llamar constructor sin una de estas',
                'price': 700000,
                'image': 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/11/20211101-FREIGHTLINER-114-SD-VOLCO-COLOMBIA-PRECIO-CARACTERISTICAS-2022-0x.jpg'
            },
            {
                'id': 'hyper-volqueta',
                'name': 'hyper volqueta',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'la verdad esto es "over kill" pero tu sabras para que necesitas una capacidad de carga tan absurdamente alta',
                'price': 7000000,
                'image': 'https://www.worldenergytrade.com/images/stories/news/metales/mineria/7937/Anglo-American-creara-primer-camion-minero-impulsado-hidrogeno-7937.jpg'
            },
            {
                'id': 'mini-aplanadora',
                'name': 'mini aplanadora',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'es una pequeña aplanadora y si pudo, a diferencia de yo, que etsa al borde de la insanidad mentl',
                'price': 20000,
                'image': 'http://maniobrax.com/wp-content/uploads/2020/01/base-maniobrax-mini-rodillo-aplanadora-05-720x720.jpg'
            },
            {
                'id': 'tren-carguero',
                'name': 'tren carguero',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'no incluimos las vias, y como o porque necesitas uno de estos es tu problema, no mio, solo alquilamos problemas',
                'price': 90000000,
                'image': 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/G5IG3O67MFC5FMKQULZFL5RVZA.jpg'
            },
            {
                'id': 'montacargas',
                'name': 'montacargas',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'un clasico de la vida, y el causante #1 de accidente laborales, pague 1 pierda 3',
                'price': 50000,
                'image': 'https://www.nikecolombiana.com/wp-content/uploads/2021/08/montacargas-nike-6.jpg'
            },
            {
                'id': 'aplanadora-1765',
                'name': 'Aplanadora 1765',
                'zone': 'Cali',
                'type': 'aplanadora',
                'hay': 'true',
                'description': 'la unica maquina de la hera medieval que tenemos',
                'price': 2000000,
                'image': 'https://tubarco.news/wp-content/uploads/2021/08/E9bDUUTXoAEpI3G.jpg'
            },
            {
                'id': 'jhon',
                'name': 'jhon',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'el es jhon, quizas no sea mucho, pero alguien debe operar las maquinas. Supongo',
                'price': 10000,
                'image': 'https://civilgeeks.com/wp-content/uploads/2012/03/Descargar-manual-del-alba%C3%B1il.jpg'
            },
            {
                'id': 'camion-estandar',
                'name': 'camion estandar',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'segun google esto es standar, estoy casi seguro de que esto no es ni estadar, ni de construccion',
                'price': 80000,
                'image': 'https://laboratuar.com/images/iso-10896-7-engebeli-arazi-kamyonlari-guvenlik-gereksinimleri-ve-dogrulama-bolum-7:-boyuna-yuk-moment-sistemleri-icin-standart-test.jpg'
            },
            {
                'id': 'optimos-primo',
                'name': 'optimos primo',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'al inicio era un chiste, ahora tenemos 300 unidades de eso y no sabemos que hacer',
                'price': 10000,
                'image': 'https://http2.mlstatic.com/D_NQ_NP_930576-MLM50502750392_062022-W.jpg'
            },
            {
                'id': 'grua-ariete',
                'name': 'grua ariete',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'esta maquina no existe, enrealidad son 37 gruas soldadas con flextape unas a otras',
                'price': 6000000,
                'image': 'https://i.ytimg.com/vi/OMoYp3GG6bs/maxresdefault.jpg'
            },
            {
                'id': 'excavadora-2',
                'name': 'excavadora 2',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'mas grande, mas fuerte, mas veloz y como 500 veces mas consumo de gasolina',
                'price': 9000000,
                'image': 'https://i.pinimg.com/originals/28/c4/41/28c4410d164e961b7954c97a49003c23.jpg'
            },
            {
                'id': 'ro-da-do.ra',
                'name': 'RO DA DO RA',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'sono chido sadame, tum tum turum, JO JOOOOOOOOO -By The World',
                'price': 23571113,
                'image': 'https://i1.sndcdn.com/artworks-jHyOfEpKI5xCzTqk-0b86QQ-t500x500.jpg'
            },
            {
                'id': 'langosta',
                'name': 'langosta',
                'zone': '2',
                'type': '3',
                'hay': 'true',
                'description': 'es un cangrejo robot de 47 metros de alto, si esto no resulbe tus problemas nada lo hara',
                'price': 9999999,
                'image': 'https://i.ytimg.com/vi/G82USZRG6oM/maxresdefault.jpg'
            },
            {
                'id': 'bugguy',
                'name': 'BUGGUY',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'almenos parte de la historia tenia que mantenerse',
                'price': 1,
                'image': 'https://www.greenscene.co.id/wp-content/uploads/2022/06/Buggy-4-696x497.jpg'
            },

        ],
        localStorageProducts: [],
        zamba : {}
    }),

    getters: {
        getProducts: (state) => [...state.products],
        
        getFilterProducts: (state) => {
  
   
                const efectivo = state.products.filter( product =>{ 
                    console.log(state.zamba)
                    return state.zamba.palabra? 
                    product.description.includes(state.zamba.palabra) || product.name.includes(state.zamba.palabra):true
        
                })

            return efectivo        
        }
    },

    actions: {

        newProduct(product) {
            this.localStorageProducts.push(product);
            this.products.push(product);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts));
        },

        loadProducts() {
            this.localStorageProducts = JSON.parse(localStorage.getItem('products'));
            this.products = this.products.concat([...this.localStorageProducts]);
        },
        zapato(id) {
            console.log(id)
            const filteredBooks = this.products.filter((product) => id === product.name);
            return filteredBooks ? {...filteredBooks[0] } : null
        },

        funcy(key,value){
            this.zamba[key] = value
   // console.log(this.zamba)
        },
        async subir(objectData){
            let objectId = String(Math.floor(Math.random() *(9999-1000)+1000));
    
            this.id = objectId;
    
            let newProduct = objectData;
            objectData.id = objectId;
    
            try{
                await setDoc(doc(db, "productos", objectId), newProduct);
                alert("Product uploaded");
              }
        
              catch(error){
                console.log(error);
              }
      },
      async aclarando(){
        const querySnapshot = await getDocs(collection(db, "productos"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        const maquina = {
            "id": doc.id,
            "image": doc.data().image,
            "name": doc.data().name,
            "price": doc.data().price,
            "zone": doc.data().zone,
            "type": doc.data().type,
            "descripcion": doc.data().descripcion
        }

        this.products.push(maquina);
        });

      },
      async mostrar(){

        this.list = [];
        this.products = [];
        this.aclarando();
  
        console.log(this.products);
      
        let valor;
        let ob;
  
        let teemp = [];
  
        for(let i = 0; i < localStorage.length; i++){
            valor = localStorage.getItem(localStorage.key(i));
            ob = JSON.parse(valor);
  
            this.products.push(ob);
        }
  
        for(let i = 0; i < teemp.length; i++){
  
            this.productos = teemp[i];
            this.list.push(this.productos);
        }
  
    },
    },
    
});