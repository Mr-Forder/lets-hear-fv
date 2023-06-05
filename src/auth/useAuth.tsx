 import {
   useEffect,
   useState,
   useContext,
   createContext,
   FunctionComponent,
 } from "react";
 import { useRouter } from "next/router";
 import firebase from "firebase/app";
 import "firebase/auth";
 import initFirebase from "./initFirebase";
 import { removeTokenCookie, setTokenCookie } from "./tokenCookies";

//CREATE CUSTOM FIREBASE AUTH HOOK
 //init firebase
initFirebase()

//typscript stuff - set up types
interface IAuthContext {
    user: firebase.User | null;
    logout: () => void;
    authenticated: boolean;
}


//create context so all of app can access firebase state
const AuthContext = createContext<IAuthContext>({
    user: null,
    logout: () => null,
    authenticated: false,
});

//create custom auth context provider - will return something that is to be wrapped around whatver children are wrapped in auth provider
export const AuthProvider: FunctionComponent = ({ children }) => {//will wrap around any functional component(s) providing access to the children of said components 
    const [user, setUser] = useState<firebase.User | null>(null);
    //init next router
    const router = useRouter();
//logout function

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        
      })
      .catch((e) => {
        console.error(e);
      });
  };

    useEffect(() => {//Create a listener, to listen out if ID token has changed (or been added, or set to null)
        const cancelAuthListener = firebase.auth().onIdTokenChanged(async (user) => {//use firebase auth method taking in user, or null
            if (user) {//if user detected...
                const token = await user.getIdToken()//firebase user method - get a token
                setTokenCookie(token)//set cookie
                setUser(user)//set user
            } else {
                removeTokenCookie()//remove cookie
                setUser(null)//reset user to null
            }
        })

        return () => {//when component unmounts - call the function we just created to either set logged in user, or set logged out
            cancelAuthListener()
        }
    },[])




    return (//return authContext provider, passing in Firebase state - user, logout func, and authenticated status
        <AuthContext.Provider value={{logout,  user,  authenticated: !!user }}>
        {children}
    </AuthContext.Provider>
    )
}

export function useAuth() {//create a hook that will allow app to access all of the stuff in useAuth
    return useContext(AuthContext)//use react useContext to create a context state which consists of authContext
}