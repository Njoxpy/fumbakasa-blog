import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                // handle response
                if (!response.ok) {
                    throw Error("Could not fetch data");
                }
                return response.json();
            })

            .then((data) => {
                setData(data);
                setIsPending(false);
                SetError(null);
            })

            // catch network error
            .catch((err) => {
                setIsPending(false);
                SetError(err.message);
            });
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;