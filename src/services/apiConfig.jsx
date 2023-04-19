import axios from 'axios';

const access_token = localStorage.getItem('token');
const defaultHeaders = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};
export function apiClient({ url, data = {}, method = '', headers = {}, noHeaders, ...rest }) {
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
        ...headers,
      },
      ...rest,
    })
      .then((res) => {
        if (res) {
          resolve(res);
        } else {
          reject(res.data.error);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
