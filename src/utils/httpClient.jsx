import axios from 'axios';

export const BASE_PATH = 'http://3809-2405-201-300b-e0dc-d83c-b3b6-24ea-2b5d.ngrok.io/api';

const axiosClient = axios.create({
    baseURL: BASE_PATH
})

axiosClient.interceptors.request.use(
    function (response) {
        const access_token = localStorage.setItem('access_token', JSON.stringify(''));
        Object.assign(response.headers, {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + access_token,
        })
        console.log('interceptor1', response);
        return response;
    },
    function (error) {
        console.log('interceptor2', error);
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    function (response) {
        console.log('intrresp', response);
        return response;
    },
    function (error) {
        console.log('interceerror', error);
        return Promise.reject(error);
    }
)

export default axiosClient;