import { api } from './api.service'

export async function getProducts(params) {
    return (await api.get('/products', 
        {
            params
        }
    )).data
}

export async function getProduct(id, params) {
    return (await api.get(`/products/${id}`, 
        {
            params
        }
    )).data
}

export async function getCategories(params) {
    return (await api.get('/categories', 
        {
            params
        }
    )).data
}

export async function getCategory(id, params) {
    return (await api.get(`/categories/${id}`, 
        {
            params
        }
    )).data
}

