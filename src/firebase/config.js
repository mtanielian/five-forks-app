import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyBQ2_YxH5jeo-HJE1GFrl6_YOBatrw1bDM",
  authDomain: "five-forks-262b0.firebaseapp.com",
  projectId: "five-forks-262b0",
  storageBucket: "five-forks-262b0.appspot.com",
  messagingSenderId: "1018419908526",
  appId: "1:1018419908526:web:ed60df1afc5d95b16f023f"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage)
});


export {
  firebaseApp,
  auth
}