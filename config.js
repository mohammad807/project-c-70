import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firebaseConfig = {
  apiKey: "AIzaSyBidyf-96e5f_ckK3FhbUEfVFILHpKI7dE",
  authDomain: "c-67-ba6fd.firebaseapp.com",
  projectId: "c-67-ba6fd",
  storageBucket: "c-67-ba6fd.appspot.com",
  messagingSenderId: "439150174067",
  appId: "1:439150174067:web:69571f0ea7388f1a43ef06",
  measurementId: "G-BVB52WWYN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase.database();