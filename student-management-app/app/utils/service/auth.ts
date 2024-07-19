import axios from '../axios';

export const register = async(userData: any) => {
    let response = await axios.post(`/auth/signup`, userData);
    console.log(response, 'api response')
    return response.data;
}

export const login = async(userData: any) => {
    let response = await axios.post(`/auth/login`, userData);
    console.log(response, 'api response')
    return response.data;
}