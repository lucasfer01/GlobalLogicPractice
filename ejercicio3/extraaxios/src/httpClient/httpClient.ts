import { urlBase } from "../contants";
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


const post = (url: string = '', body = {}, headers = {}) => axios.post(readUrl(url), body, {

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
});


const put = (url: string = '', body = {}, headers = {}) => axios.put(readUrl(url), body, {

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
});


const del = (url: string = '', headers = {}) => axios.delete(readUrl(url), {

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
    }
});

export const httpClient = { get, post, put, del };