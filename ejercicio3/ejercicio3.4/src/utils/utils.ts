import fetchData from '../dataJson';

export const fetchPromise = (condition: boolean) => new Promise((resolve, reject) => {
    
    setTimeout(() => {
        if (condition) {
            return reject( new Error('Ha ocurrido un error'));
        } else {
            return resolve(fetchData);
        }
    }, 5000);
});