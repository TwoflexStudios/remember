import { createContext } from "react";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";


declare interface IFireContext {
    firebaseApp: FirebaseApp;
    analytics: Analytics;
}

const FireContext = createContext({} as IFireContext);

const firebaseConfig = {
    apiKey: "AIzaSyAxmN9eyy7778Vh9ACRB8cG1bWdCN9Fpzs",
    authDomain: "rememberme-d69c3.firebaseapp.com",
    projectId: "rememberme-d69c3",
    storageBucket: "rememberme-d69c3.appspot.com",
    messagingSenderId: "982067573634",
    appId: "1:982067573634:web:61c391c2db96b82101d59b",
    measurementId: "G-G9R7W98SC8"
};

const FirebaseContext = ({children}: any) => {
    // const firebaseApp = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(firebaseApp);

    const firebaseApp:any = null;
    const analytics:any = null;
    
    return (
        <FireContext.Provider value={{
            firebaseApp,
            analytics
        }}>
            {children}
        </FireContext.Provider>
    )
}

export default FirebaseContext;