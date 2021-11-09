import { getAuth } from '@firebase/auth';
import React, { createContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../firebase'

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const auth = getAuth(app)
    const [user,loading] = useAuthState(auth);
    return (
        <AuthContext.Provider value={{user,loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}