import {useEffect, useState, useRef} from "react";


function useCallbackState (state:any) {
    const cbRef = useRef();
    const [data, setData] = useState(state);

    useEffect(() => {
        // @ts-ignore
        cbRef.current && cbRef.current(data);
    }, [data]);

    return [data, function (val:any, callback:any) {
        cbRef.current = callback;
        setData(val);
    }];
}

export default useCallbackState;

