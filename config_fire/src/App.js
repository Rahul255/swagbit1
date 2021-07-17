
import './App.css';
import {Firebase} from './firebase/config';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{

      Firebase.auth().createUserWithEmailAndPassword('rahul@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
        Firebase.firestore().collection('products').doc('8Ych8D7rLRzVCt5rBagR').set({
          name:"updated"
         })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
        
      }}>Click Me</button>
    </div>
  );
}

export default App;
