import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    // Set an authentication state observer and get user data 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                return () => {
                    unsubscribe();
                };
            }
        })
    }, [])

    // Sign up new users
    const authSignUp = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                console.log('SignUp Error', error.message)
            })
    }

    // Sign in existing users 

    const authSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                console.log('signInError', error.message)
            })
    }


    const contextValue = {
        authSignUp,
        authSignIn,
        user,
        setUser,
    }
    return (
        <div>

            <AuthContext.Provider value={contextValue}>

                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;