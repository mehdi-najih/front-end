import {axiosInstance } from '../http-common';


const getAll = () => {
return axiosInstance.get('/employee');
}

const create = data => {
    return axiosInstance.post("/employee",data);
}

const get = id => {
    return axiosInstance.get(`/employee/${id}`);
}
const update = data => {
    return axiosInstance.put('/employee', data);
}
const remove = id => {
    return axiosInstance.delete(`/employee/${id}`);
}

export default { getAll,create, get, update, remove};
