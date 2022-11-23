import React,{ useState } from "react";
import styled from "styled-components";
import SVG from "./SVG";
import {close} from "../icon/icon";

const Login = styled.div`
  width: 40vw;
  height: 25vw;
  border: 1px solid red;
  position: absolute;
  top: 10vw;
  margin: 0 auto;
  background-color: #fff;
  z-index: 888;
  svg {
    position: absolute;
    right: 20px;
  }
`

const LoginBox = (props: { onCloseLoginBox: any; }) => {
    // const [onCloseLoginBox, setClose] = useState(true)
    let closeSwitch = () => {
        // setClose(onCloseLoginBox => false)
        // console.log(onCloseLoginBox)
        props.onCloseLoginBox = false
    }
    if(props.onCloseLoginBox){
        return (
            <Login className="LoginBox justifyCenter">
                <div>
                    登录或注册
                    <div onClick={closeSwitch}><SVG d={close} /></div>

                </div>
            </Login>
        )
    }else {
        return null
    }

}

export default LoginBox;
