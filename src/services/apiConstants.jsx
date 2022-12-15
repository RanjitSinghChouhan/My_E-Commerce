const BASE_PATH = 'http://7d03-2405-201-300b-e0dc-e19e-a48f-c66e-16b2.ngrok.io/api';

export const PATH = {
    auth: {
        signup: `${BASE_PATH}/register`,
        login: `${BASE_PATH}/login`,
        logout: `${BASE_PATH}/logout`,
        cart: `${BASE_PATH}/carts`
    }
}