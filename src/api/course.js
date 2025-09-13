import axios from "axios";

const COURSE_ENROLL = "http://10.8.20.56:9005";

export const enrollApi = async(userDetailsId, subjectId) => {
    const res = await axios.post(`${COURSE_ENROLL}/studentSubjectEnroll/save`, {userDetailsId, subjectId})
    return res.data;
}


const COURSE_FETCH = "http://10.8.20.56:9005"

export const fetchApi = async(userDetailsId) => {
    const res = await axios.get(`${COURSE_FETCH}/studentSubjectEnroll/getById/${userDetailsId}`)
    return res.data;
}