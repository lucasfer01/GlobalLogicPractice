import { useEffect, useState } from "react";
import { fetchPromise } from "../utils/utils";


export interface dataProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface responseProps {
    data: dataProps[];
    error: string;
    status: string;
}


export const useData = () => {
    const [simulateError, setSimulateError] = useState<boolean>(false);

    const [response, setResponse] = useState<responseProps>({ data: [], error: "", status: "success" });


    function makeAnError() {

        setSimulateError(true);
    }

    useEffect(() => {

        setResponse({ data: [], error: "", status: "loading" });

        let isApiSubscribed = true; // Condición para aplicar la promesa "fulfilled"

        fetchPromise(simulateError)
            .then((result: any) => {
                if (isApiSubscribed) {
                    setResponse({ data: result, error: "", status: "success" });
                }
            })
            .catch((error) => {
                setResponse({ data: [], error: error.message, status: "error" });
            })

        return () => {
            isApiSubscribed = false; // Desuscripcion para evitar que si hay un error se ejecute el .then()
        }

    }, [simulateError]);

    return { response, makeAnError };
}
