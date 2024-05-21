import axios from "axios";


export const loginRequest =  (email: string,password: string) => {

    return axios.post('https://api.homologation.cliqdrive.com.br/auth/login/',{email,password}, {
        headers: {
            'Accept': 'application/json;version=v1_web',
            'Content-Type': 'application/json'
        }
    })

}

export const ProfileRequest =  (token: string) => {

    return axios.get('https://api.homologation.cliqdrive.com.br/auth/profile/', {
        headers: {
            'Authorization' : `Bearer ${token}`,
            'Accept': 'application/json;version=v1_web',
            'Content-Type': 'application/json'
        }
    })

}