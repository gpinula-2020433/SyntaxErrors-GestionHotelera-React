import axios from "axios"

//Configuración básica (General o genérica)
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3200',
        timeout: 2000
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

export const getBestSellingProducts = async ()=>{
    try {
        const response = await apiClient.get('/product/productosmasvendidos')
        return response.data.products
    } catch (error) {
        console.error('Error fetching best selling products', error)
        return[]
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