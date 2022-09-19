import { useEffect, useState } from "react";
import { resultsDataItem } from '../interfaces/interfaces';
import { httpClient } from '../httpClient/httpClient';


export const useApiData = (page: number) => {

    const [data, setData] = useState<Array<resultsDataItem>>([]);
    const [pages, setPages] = useState<number>(0);


    useEffect(() => {
        httpClient.get(`/character${page && `?page=${page}`}`)
            .then(({ data }) => {
                setData(data.results);

                setPages(data.info.pages);
            })
            .catch(error => console.log(error))
    }, []);

    return {data, pages, setData};
}
