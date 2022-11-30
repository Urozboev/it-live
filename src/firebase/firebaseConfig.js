import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDhh_UJXEqHTd0gzPg746slTu53kzDQ0wI",
    authDomain: "qwert-8e2df.firebaseapp.com",
    projectId: "qwert-8e2df",
    storageBucket: "qwert-8e2df.appspot.com",
    messagingSenderId: "99010427565",
    appId: "1:99010427565:web:80dd36e3d8f5311d156424",
    measurementId: "G-LSKM1JZXWP"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);