import React from "react";

let fill: any;

const SVG = ({
        // name="",
        d = [{d: '', fill}],
        // style={},
        className=""
    })=> {

    return (
        <svg className={`icon ${className}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="75">
            {d.map( (item,index) =>
                <path fill={!!item.fill ? item.fill :'#8a8a8a'} key={index} d={item.d} />
            )}
        </svg>
    )
}

export default SVG;
