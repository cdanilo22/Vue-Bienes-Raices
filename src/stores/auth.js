import {defineStore} from 'pinia'
 import { useFirebaseAuth } from 'vuefire'
import {signInWithEmailAndPassword} from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {

    const auth = useFirebaseAuth()


    const errorCodes = {
        'auth/invalid-credential' : 'Error de usuario'
    }

    const login = ({email, password}) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                console.log('Iniciado correctamente');
        })
        .catch(error => {
            console.log(errorCodes[error.code]);
        })
    }

    return{
        login
    }


})