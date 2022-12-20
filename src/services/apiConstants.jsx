const BASE_PATH = 'http://def9-103-185-242-80.ngrok.io/api';

export const PATH = {
    auth: {
        signup: `${BASE_PATH}/register`,
        login: `${BASE_PATH}/login`,
        logout: `${BASE_PATH}/logout`,
        cart: `${BASE_PATH}/carts`,
        products: `${BASE_PATH}/products`
    }
}