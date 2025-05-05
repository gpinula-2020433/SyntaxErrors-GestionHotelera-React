import React, { useState } from 'react'
import { loginRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const login = async(userLoggin, password)=>{
        setIsLoading(true)
        const userLoginData = {
            userLoggin, 
            password
        }
        const response = await loginRequest(userLoginData)
        setIsLoading(false)

        if(response.error){
            setError(true)
            if(response?.err?.response?.data?.errors){
                let arrayErrors = response?.err?.response?.data?.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al logear. Intente de nuevo, todo mal...'
            )
        }
        setError(false)
        toast.success('TODO BIEN LOEADO')
        navigate('/main')
    }
  return {
    login,
    isLoading,
    error,
    setError
  }
}