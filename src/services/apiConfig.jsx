import axios from 'axios'
import { PATH } from './apiConstants';


const access_token = localStorage.setItem('token', JSON.stringify(''));
const defaultHeaders = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0"
};
export function apiClient({
    url,
    data = {},
    method = '',
    headers = {},
    noHeaders,
    ...rest
}) {
    console.log('url', url, data, method, headers, access_token);
    if (access_token === '' || access_token === null) {
        delete axios.defaults.headers.common['Authorization'];
    }
    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            data,
            headers: {
                ...(noHeaders ? {} : defaultHeaders),
                ...headers
            },
            ...rest
        })
            .then(res => {
                if (res) {
                    resolve(res);
                } else {
                    reject(res.data.error);
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}