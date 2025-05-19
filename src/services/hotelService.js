import axios from "axios"

//Configuración básica (General o genérica)
const apiHotel = axios.create(
    {
        baseURL: 'http://localhost:3200',
        timeout: 2000
    }
)

apiHotel.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers.Authorization = token
        }
        return config
    }

)

export const getHotelsRequest = async ()=>{
    try {
        return await apiHotel.get('/v1/hotel/')
    } catch (err) {
        return {
            error: true,
            err
        }
    }

}