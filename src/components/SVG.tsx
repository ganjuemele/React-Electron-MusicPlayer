import React from "react";




const SVG = ({
        name="",
        d=[{d:''}],
        style={},
        className="",
        fill="#8a8a8a"
    })=> {

    // console.log(musicLike)

    return (
        <svg className={`icon ${className}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="75">
            {d.map( item =>
                <path fill={fill} d={item.d}/>
            )}
        </svg>
    )

}

export default SVG;
