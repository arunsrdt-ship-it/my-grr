import axios from "axios"

const DETAIL_URL = "http://10.8.20.56:9002"
export const detailApi = async(offeringId) => {
    const res = await axios.get(`${DETAIL_URL}/subjectOffering/offerings/${offeringId}`)
    return res.data;
}