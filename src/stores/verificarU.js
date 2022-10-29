import {defineStore} from "pinia";
import { signInWithEmailAndPassword,signOut, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {auth, db,} from "../firebase"
import { doc, setDoc  } from "firebase/firestore"; 


export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({

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
          alert("User created");
        }
  
        catch(error){
          console.log(error);
        }
      },
       SignUp(email, password, name){
   
        let newUser = {email, password, name}
  
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(newUser)
            this.addUserToDatabase(db, user.uid, newUser)
  
            console.log("User created");
            alert("User Created Succesfully");
            // ...
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
              }
            });
  
        return userId;
      },

    
    }
});