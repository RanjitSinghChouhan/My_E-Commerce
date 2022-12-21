const BASE_PATH = 'http://54ca-2405-201-300b-e0dc-7879-80f6-6099-8154.ngrok.io/api';

export const PATH = {
    auth: {
        signup: `${BASE_PATH}/register`,
        login: `${BASE_PATH}/login`,
        logout: `${BASE_PATH}/logout`,
        cart: `${BASE_PATH}/carts`,
        products: `${BASE_PATH}/products`
    }
}