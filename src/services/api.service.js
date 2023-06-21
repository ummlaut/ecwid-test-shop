import axios from "axios"

export const api = axios.create({
    baseURL: `https://app.ecwid.com/api/v3/${process.env.VUE_APP_STORE_ID}`,
    timeout: 1000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`
    }
});  