const BASE_PATH = 'http://a231-2405-201-300b-e0dc-10e0-9384-ca02-367b.ngrok.io/api';

export const PATH = {
    auth: {
        signup: `${BASE_PATH}/register`,
        login: `${BASE_PATH}/login`,
        logout: `${BASE_PATH}/logout`,
        cart: `${BASE_PATH}/carts`,
        products: `${BASE_PATH}/products`
    }
}