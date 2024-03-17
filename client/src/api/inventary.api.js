import axios from 'axios'

export const getAllinventary = () => {
    return axios.get('http://localhost:8000/inventary/api/v1/inventary/')
}

export const addNewItem = (newItem) => {
    return axios.post('http://localhost:8000/inventary/api/v1/inventary/', newItem)
}