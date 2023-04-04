import { useEffect } from "react";
import { useState } from "react";

const useFind = (contentDatas, filterKey) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const dataObj = contentDatas?.find((data) => data?.name === filterKey);
        setData(dataObj);
    }, []);

    return (
        data
    )
}

export default useFind;
