const BASE_PATH = 'http://localhost:8000/admin';

export const PATH = {
    auth: {
        signup: `${BASE_PATH}/register`,
        login: `${BASE_PATH}/login`,
        logout: `${BASE_PATH}/logout`,
        cart: `${BASE_PATH}/carts`,
        products: `${BASE_PATH}/products`,
        userDetails: `${BASE_PATH}/userDetails`
    }
}