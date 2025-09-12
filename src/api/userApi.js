import axios from "axios";


const AUTH_URL = "http://10.8.20.56:9001"

export const getUserById = async(userDetailsId) => {
    const res = await axios.post(`${AUTH_URL}/userDetails/getById/${userDetailsId}`)
        return res.data;
}