import axios from "axios";

const api = {
    login(data) {
        return axios.post('app/login/', data).then(res => res)
    },
    logOut(data) {
        return axios.post('app/logOut/', data).then(res => res)
    },
    loginCheck(data) {
        return axios.post('app/loginCheck/', data).then(res => res)
    },
    register(data) {
        return axios.post('app/register/', data).then(res => res)
    },
    getTableData(data) {
        return axios.post('app/getTableData/', data).then(res => res)
    },
    getPredictData(data) {
        return axios.post('app/getPredictData/', data).then(res => res)
    },
    getPermissionData(data) {
        return axios.post('app/getPermissionData/', data).then(res => res)
    },
    getAllCount(data) {
        return axios.post('app/getAllCount/', data).then(res => res)
    },
    getPredictCount(data) {
        return axios.post('app/getPredictCount/', data).then(res => res)
    },
    getMyInfo(data) {
        return axios.post('app/getMyInfo/', data).then(res => res)
    },
    postFormData(data) {
        return axios.post('app/postFormData/', data).then(res => res)
    },
    postPermissionData(data) {
        return axios.post('app/postPermissionData/', data).then(res => res)
    },
    downloadPredictCSV(data) {
        return axios.post('app/downloadPredictCSV/', data).then(res => res)
    },
    getPermission(data) {
        return axios.post('app/getPermission/', data).then(res => res)
    },
    delUserInfo(data) {
        return axios.post('app/delUserInfo/', data).then(res => res)
    },

}

export default api;