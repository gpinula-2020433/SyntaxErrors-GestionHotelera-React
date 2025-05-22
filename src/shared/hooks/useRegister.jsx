import React, { useState } from 'react'
import { registerRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
    //Ver si aún está cargando la respuesta el API
    const [isLoading, setIsLoading] = useState(false)
    //Saber si la consulta al API trae errores
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    //Función que consulta
    const register = async(name, surname, email, username, password)=>{
        setIsLoading(true)
        const user = {
            name,
            surname,
            username,
            email,
            password
        }
        //Consulto al api mediante la función del api.js
        const response = await registerRequest(user)
        setIsLoading(false)

        //Logica de lo que respondió el back
        if(response.error){
            setError(true)
            if(response?.err?.response?.data?.errors){
                let arrayErrors = response?.err?.response?.data?.errors
                arrayErrors.forEach(error => {
                    toast.error(error.msg)
                });
                return
                /* for (const error of arrayErrors) {
                    return toast.log(error.msg)
                } */
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar registrar el usuario. Intente de nuevo, todo mal...'
            )
        }
        setError(false)
        toast.success('Registro exitoso, ya puede iniciar sesión')

        setTimeout(() => {
            navigate('/auth/login')  
        }, 2700);
        return
    }
  return {
    register,
    isLoading,
    error,
    setError
  }
}