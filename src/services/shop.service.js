import { api } from './api.service'

export async function getProducts(params) {
    await api.get('/products', 
        {
            params
        }
    )
}

export async function getProduct(id, params) {
    await api.get(`/products/${id}`, 
        {
            params
        }
    )
}

export async function getCategories(params) {
    await api.get('/categories', 
        {
            params
        }
    )
}

export async function getCategory(id, params) {
    await api.get(`/categories/${id}`, 
        {
            params
        }
    )
}

