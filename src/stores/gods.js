import {
    defineStore
} from "pinia";

export const tienda = defineStore("products", {
    state: () => ({
        products: [{
                'name': 'excavadora',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'noi',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'niveladora',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'compactadora',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'grua',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'grua de torre',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'manipulador telescopico',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'tanqueta',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'volqueta',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'hyper volqueta',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'mini aplanadora',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'tren carguero',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'momtacargas',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'Aplanadora 1765',
                'zone': 'Cali',
                'type': 'aplanadora',
                'hay': 'false',
                'description': 'la unica maquina de la hera medieval que tenemos',
                'price': 2000000,
                'image': 'https://tubarco.news/wp-content/uploads/2021/08/E9bDUUTXoAEpI3G.jpg'
            },
            {
                'name': 'jhon',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'camion estandar',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'optimos primo',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'grua comedicamente alta',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'excavadora 2',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'aplanadora de oro',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'la multi herramienta',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'ni',
                'price': 99999,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
            },
            {
                'name': 'THE REAL BUGGUY',
                'zone': '2',
                'type': '3',
                'hay': 'false',
                'description': 'almenos parte de la historia tenia que mantenerse',
                'price': 0.00001,
                'image': 'https://i.pinimg.com/736x/40/78/d0/4078d02c59cda3b48e6a937208f8a56b.jpg'
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
        }
    }
});