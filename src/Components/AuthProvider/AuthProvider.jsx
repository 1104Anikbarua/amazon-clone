import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const logout = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successfult')
            })
            .catch(() => {
                console.log('sign out failed')
            })
    }

    return (
        <AuthContext.Provider value={{ user, signUp, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;