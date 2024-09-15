
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
    authDomain: "fir-auth-65294.firebaseapp.com",
    projectId: "fir-auth-65294",
    storageBucket: "fir-auth-65294.appspot.com",
    messagingSenderId: "105428798939",
    appId: "1:105428798939:web:49a9375f32ea94d4dfebfe"
};

// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// });
// export { auth };

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(app);
