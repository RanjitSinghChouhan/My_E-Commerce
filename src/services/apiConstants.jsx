const BASE_PATH = 'http://862c-2405-201-300b-e0dc-e435-dcfc-ae9c-929a.ngrok.io/api';

export const PATH = {
    auth: {
        signup: `${BASE_PATH}/register`,
        login: `${BASE_PATH}/login`,
        logout: `${BASE_PATH}/logout`,
        cart: `${BASE_PATH}/carts`,
        products: `${BASE_PATH}/products`
    }
}