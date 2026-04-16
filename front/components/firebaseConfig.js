import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyATcCZaQ6AZr5pTm2HdV_1Oa4uBwWO2Uoc",
  authDomain: "dietaapp-f4103.firebaseapp.com",
  projectId: "dietaapp-f4103",
  storageBucket: "dietaapp-f4103.firebasestorage.app",
  messagingSenderId: "1087802466144",
  appId: "1:1087802466144:web:625c58b7f51f0591810805",
  measurementId: "G-FETT5SLDFL"
};


const app = initializeApp(firebaseConfig);


const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };