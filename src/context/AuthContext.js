import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = createContext()
export const AuthContextProvider = ({ children, showProfil }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({})

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider)
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const googleLogOut = () => {
        showProfil(false)
        navigate('/')
        signOut(auth)
    }

    const payHistory = [
        { id: 1, sinf: '1-A', img: 'images/testimonial-user.png', fullName: 'Asqarov Ali Lapasovich', kurs: 'FrontEnd', payment: "To'langan", rating: 4 },
        { id: 2, sinf: '2-A', img: 'images/testimonial-user.png', fullName: 'Baratov Shodiyor Aliyevich', kurs: 'BackEnd', payment: "To'lanmagan", rating: 4 },
        { id: 3, sinf: '3-A', img: 'images/testimonial-user.png', fullName: "Qurbonov Jamol Kamol o'g'li", kurs: 'Python', payment: "To'langan", rating: 3 },
        { id: 4, sinf: '1-D', img: 'images/testimonial-user.png', fullName: "Abdullayev Qosim Jomart o'g'li", kurs: 'Designer', payment: "To'lanmagan", rating: 5 },
    ]

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={
            {
                googleSignIn,
                googleLogOut,
                user,
                facebookSignIn,
                showProfil,
                payHistory
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}