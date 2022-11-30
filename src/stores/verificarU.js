import {defineStore} from "pinia";
import { signInWithEmailAndPassword,signOut, createUserWithEmailAndPassword,onAuthStateChanged,deleteUser,getAuth, sendPasswordResetEmail  } from "firebase/auth";
import {auth, db,} from "../firebase"
import { doc, setDoc,deleteDoc   } from "firebase/firestore"; 


export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
      in: null,
      pasar: false,
      auth: auth
    }),

    actions: {

        SignIn(email,password){
          console.log(email)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
  // Signed in 

         const user = userCredential.user;
  // ...

  console.log("Logged In")
  alert("Logged in Succesfully")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  console.log(errorMessage);

  alert("Email or password are incorrect, please try again");
});
        },

        signOut(){
          signOut(auth).then(()=>{
              console.log("Logged out");
              alert("Logged out");
          }).catch((error) => {
              console.log(error);
          });
      },

      async addUserToDatabase(db, userId, userInfo){
        try{
          await setDoc(doc(db, "users", userId), userInfo);
          //alert("User created");
        }
  
        catch(error){
          console.log(error);
        }
      },
       SignUp(email, password, name, admin){
   
        let newUser = {email, password, name, admin}
  
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(newUser)
            this.addUserToDatabase(db, user.uid, newUser)
  
            console.log("User created");

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
  
            console.log(errorMessage);
            // ..
          });
      },

      validar(){

        let userId;
  
          onAuthStateChanged(auth, (user) => {
  
              if (user) {
                const user = auth.currentUser;
                console.log("USERID", user.uid);
                userId = user.uid
              } else {
                console.log("User is not signed in");
                userId = "anonimo"
              }
            });
  
        return userId;
      },
      validar2(){

        let userId;
        const user = auth.currentUser;
  if(user!= null){
    
    userId = user.uid
  }else{
    userId="anonimo"
  }


        return userId;
      },
      trae() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.in = user;

                if (user.uid == "mYCXvaIzLJXpS716wzD88wGIQVs2" ) {
          
                    this.pasar = true;
           
                }
            } else {
                console.log("No user")
                this.pasar = false;
            }
        })

        return this.in; 
    },
    dileQueEresAdmin() {
      this.trae();
        return this.pasar;
    },
    revert(email){
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          alert("mire su correo")
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      
    },
 async  KILL(){
     
      const auth = getAuth();
const user = auth.currentUser;
console.log(user.uid)
await deleteDoc(doc(db, "users", user.uid));
 deleteUser(user).then(() => {
  alert("morisionado")
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});
    }
    
    }
});