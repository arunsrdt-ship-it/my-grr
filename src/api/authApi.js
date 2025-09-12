import axios from "axios";


const AUTH_URL = " http://10.8.20.56:9001"

export const loginApi = async(userId, pass) => {
    const res = await axios.post(`${AUTH_URL}/userDetails/userLogin`, {userId, pass})
        return res.data;
}