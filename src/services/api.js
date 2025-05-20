import axios from "axios"

//Configuración básica (General o genérica)
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3200',
        timeout: 2000
    }
)

apiClient.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers.Authorization = token
        }
        return config
    }
)


export const loginRequest = async(userLoginData)=>{
    try {
        return await apiClient.post('/login', userLoginData, {
            type: 'multipart/form-data'
        })
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}
//Ruta para registrar
export const registerRequest = async(user)=> {
    try{
        return await apiClient.post('/register', user,{ 
            type: 'multipart/form-data'
        })
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getHotelsRequest = async ()=>{
    try {
        return await apiClient.get('/v1/hotel/',{ 
            type: 'multipart/form-data'
        })
    } catch (err) {
        return {
            error: true,
            err
        }
    }

}



/*export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('/auth/login', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}*/