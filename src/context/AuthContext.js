import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { auth } from "../firebase"
import { useEffect } from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function SignUp (email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function SignIn(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function SignOut(){
        return auth.signOut()
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })

        return unsubscribe

    }, [])


    const value= {
        currentUser,
        SignUp,
        SignIn,
        SignOut
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
