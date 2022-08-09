import axios from 'axios'

const baseUrl = 'http://localhost:8080/staffs'

const config = {
    // headers: { Authorization: ''}
}

const getStaffs = async () => {
    const response = await axios.get(baseUrl, config)
    return response.data
}

const createStaff = async (staffObject) => {
    const response = await axios.post(baseUrl, staffObject, config)
    return response.data
}

const updateStaff = async (id, staffObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, staffObject, config)
    return response.data
}

const deleteStaff = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

const staffService = {
    getStaffs,
    createStaff,
    updateStaff,
    deleteStaff
}

export default staffService