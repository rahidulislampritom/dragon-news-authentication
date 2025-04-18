import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({})


    // Set an authentication state observer and get user data 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading(false);

            return () => {
                unsubscribe();
            };

        })

        return () => unsubscribe();
    }, [])

    // Sign up new users
    const authSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in existing users 

    const authSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // To sign out a user

    const authSignOut = () => {
        return signOut(auth)

    }

    // Update a user's profile

    const profileUpdate = (profileInfo) => {
        return updateProfile(auth.currentUser, profileInfo)
    }

    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const contextValue = {
        authSignUp,
        authSignIn,
        user, setUser,
        authSignOut,
        loading,
        error, setError,
        profileUpdate,
        googleLogin,
        githubLogin,
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