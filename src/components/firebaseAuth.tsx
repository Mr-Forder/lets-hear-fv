 import { FunctionComponent, useState, useEffect } from "react";
 import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
 import firebase from "firebase/app";
 import "firebase/auth";

const firebaseAuthConfig = {
    signInFlow: "popup",
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ],
    signInSuccessUrl: "/",
}

const FirebaseAuth: FunctionComponent = () => {
    const [renderAuth, setRenderAuth] = useState(false)
    
    //Nextjs first render is on server side - useEffect only runs after load, changing state via useEffect will trigger rerender
useEffect(()=>{setRenderAuth(true)},[])
    
    
    return (
        <div className="mt-16 dark:bg-gray-900">
            {renderAuth ? <StyledFirebaseAuth
                uiConfig={firebaseAuthConfig}
                firebaseAuth={firebase.auth()} /> : null}
    </div>
    )
}

export default FirebaseAuth