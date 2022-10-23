import axios from'axios';
import * as Config from './../constants/Config';

export const callApi = (endpoint, method='GET', body) => {
    return axios({
        method: method,
        url: Config.API_URL + "/" + endpoint,
        data: body
    });
};
