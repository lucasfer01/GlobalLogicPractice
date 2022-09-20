import { urlBase } from "../const";
import axios from 'axios';

/**
 * @param {string} url url a la cual hacer la petición
 * En caso de comenzar con "http" o "https" devuelve la url
 * Caso contrario lo concatena con la url base
 **/

const readUrl = (url: string = '') => url.startsWith('http://') || url.startsWith('https://') ? url : urlBase + url;


const get = (url: string = '', headers = {}) => axios.get(readUrl(url), {

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
});

export const httpClient = { get };