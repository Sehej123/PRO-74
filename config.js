import  firebase from 'firebase'


  const firebaseConfig = {
  apiKey: "AIzaSyBCL3FotVFtXlNYTRX7zXd3xzetqUzAOqQ",
  authDomain: "wily-app-e81ea.firebaseapp.com",
  projectId: "wily-app-e81ea",
  storageBucket: "wily-app-e81ea.appspot.com",
  messagingSenderId: "446887419022",
  appId: "1:446887419022:web:6ddf7be28622e2e8533ddf"
};
 if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore();