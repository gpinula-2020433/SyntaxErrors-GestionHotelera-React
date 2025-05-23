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

export const getUserRequest = async (id)=>{
    try {
        return await apiClient.get(`/v1/user/${id}`)
    } catch (error) {
        return {
            error: true,
            error
        }
    }
}

export const updateUserRequest = async(id, data)=>{
    try {
        return await apiClient.put(`/v1/user/updateClient/${id}`, data)
    } catch (error) {
        return {
            error: true,
            error
        }
    }
}

export const updatePasswordRequest = async (id, data) => {
  try {
    return await apiClient.put(`/v1/user/updatePassword/${id}`, data);
  } catch (error) {
    return {
      error: true,
      error
    };
  }
};

export const deleteUserRequest = async(id, password) => {
  try {
    return await apiClient.delete(`/v1/user/deleteClient/${id}`, {
      data: { password }
    });
  } catch (error) {
    throw error
  }
};


export const getHotelDetailsRequest = async (id) => {
  try {
    return await apiClient.get(`/v1/hotel/hoteldetails/${id}`)
  } catch (err) {
    return {
      error: true,
      err
    }
  }
}

export const createReservation = async (data) => {
  const token = localStorage.getItem('token')

  const response = await apiClient.post('/v1/reservation', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

export const getInvoicesByCustomerRequest = async () => {
  try {
    const response = await apiClient.get('/v1/invoice/getCustomer/');
    return response.data;
  } catch (err) {
    return {
      error: true,
      err,
    };
  }
};