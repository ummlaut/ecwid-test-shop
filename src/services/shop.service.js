import { api } from './api.service'


export async function getProducts(params) {
    await api.get('/products', {
        params
    })
}