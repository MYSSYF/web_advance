import {defineStore} from "pinia";
import { db,} from "../firebase"
import {  doc, setDoc ,collection,getDocs,getDoc } from "firebase/firestore"; 


export const tienda = defineStore("products", {
    state: () => ({
        products: [],
        single:[],
        id: null,
        id2: null,
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
       async zapato(id){

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            //console.log("Document data:", docSnap.data());
            const maquina = {
                "id": docSnap.id,
                "image": docSnap.data().image,
                "name": docSnap.data().name,
                "price": docSnap.data().price,
                "zone": docSnap.data().zone,
                "type": docSnap.data().type,
                "descripcion": docSnap.data().descripcion
            }
            this.single = maquina
            //console.log(this.single)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
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
      async casualComent(f){
        let objectId2 = String(Math.floor(Math.random() *(999-100)+100));

        this.id2 = objectId2;

        let newCom = f;
        f.id2 = objectId2;

        try{
            await setDoc(doc(db, "coments", objectId2), newCom);
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
    async getUser(id) {

            const docRef = doc(db, "users", id);
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                return data;
            } catch (error) {
                console.log(error);
            }

    },
    },
    
});