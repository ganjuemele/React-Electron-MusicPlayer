import React,{ useState } from "react";
import styled from "styled-components";
// import SVG from "./SVG";
// import {close} from "../icon/icon";

const Login = styled.div`
  .mark {
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: -176px;
      top: 0;
      background-color:rgba(90,90,90,.8);
      filter: blur(100px);
  }
  & > .LoginBox{
    width: 40vw;
    height: 25vw;
    position: fixed;
    //top: 20vw;
    top: 0;
    left: 30vw;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
    z-index: 888;
    flex-direction: column;
    padding: 20px 0;
    svg {
      position: absolute;
      right: 20px;
    }
    div.input-t {
      font-size: 14px;
      background-color:#fff;
      position: relative;
      left: 5px;
      top: 6px;
      display: block;
      width: max-content;
      padding: 0 4px;
    }
    input {
      border: 1px solid #777;
      height: 36px;
      width: 250px;
      padding: 0 10px;
    }
    input:hover {
      border: 1px solid orangered;
    }
    button {
      height: 36px;
      color: #fff;
      width: 10vw;
      border-radius: 5px;
      line-height: 36px;
    }
    button.cancel {
      background-color:#c3c3c3;
      margin-right: 36px;
    }
    button.confirm {
      background-color: orangered;
    }
  }
`

const LoginBox = (props: { data: boolean; }) => {
    const [onCloseLoginBox, setClose] = useState(props.data)
    let isShowLoginBox = props.data
    console.log(onCloseLoginBox)
    let closeSwitch = () => {
        // setClose(onCloseLoginBox => false)
        console.log(123,isShowLoginBox,onCloseLoginBox)
        setClose(false)
    }
    if(props.data){
        return (
            // <Login className="LoginBox justifyCenter" style={{display:`${props.data}? 'block' : 'block'`}}>
            <Login style={{display:`${onCloseLoginBox}? 'block' : 'none'`}}>
                <div className="mark"></div>
                <div className="LoginBox alignCenter justifyBetween">
                    <div>登录或注册</div>
                    <div><div className="input-t">用户名</div><input type="text"/></div>
                    <div><div className="input-t">密码</div><input type="text"/></div>
                    {/*<div onClick={closeSwitch}><SVG d={close} /></div>*/}
                    <div>
                        <button className="cancel" onClick={ closeSwitch }>取消</button>
                        <button className="confirm">确定</button>
                    </div>
                </div>
            </Login>
        )
    }else {
        return null
    }

}



// const LoginDialog = styled.div`
//   border: 1px solid orangered;
//   width: 40vw;
//   height: 25vw;
//   position: sticky;
//   top: 20vw;
//   margin: 0 auto;
//   background-color: #fff;
//   z-index: 888;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 0;
// ,.hideLoginBox {
//   display: none;
// }
//   svg {
//     position: absolute;
//     right: 20px;
//   }
//   div.input-t {
//     font-size: 14px;
//     background-color:#fff;
//     position: relative;
//     left: 5px;
//     top: 6px;
//     display: block;
//     width: max-content;
//     padding: 0 4px;
//   }
//   input {
//     border: 1px solid #777;
//     height: 36px;
//     width: 250px;
//     padding: 0 10px;
//   }
//   input:hover {
//     border: 1px solid orangered;
//   }
//   button {
//     height: 36px;
//     color: #fff;
//     width: 10vw;
//     border-radius: 5px;
//     line-height: 36px;
//   }
//   button.cancel {
//     background-color:#c3c3c3;
//     margin-right: 36px;
//   }
//   button.confirm {
//     background-color: orangered;
//   }
// `;

// const Login_Dialog = (a:boolean)=>{
//     let b = a
//     if(b){
//         //  const Login_Dialog = ()=> {
//         //     const [query, setQuery] = useState(false);
//             // const cbRef = useRef()
//             // useEffect(()=>{
//             // //     console.log(321313123)
//             // //     a=!a
//             // //     console.log(a)
//             // }, [query]);
//             // const [isShowLogin, setShowLogin] = useState(false)
//             loginBoxClassName = 'LoginBox justifyCenter';
//             // if(isShowLogin){
//             //     loginBoxClassName += ' zhanshi';
//             // } else {
//             //     loginBoxClassName += ' hideLoginBox Nozhanshi';
//             // }
//             // console.log(isShowLogin,loginBoxClassName)
//             return (
//                 <LoginDialog className={loginBoxClassName} style={{display:`${a}? 'block' : 'none'`}}>
//                     <div>登录或注册</div>
//                     <div><div className="input-t">用户名</div><input type="text"/></div>
//                     <div><div className="input-t">密码</div><input type="text"/></div>
//                     {/*<div onClick={closeSwitch}><SVG d={close} /></div>*/}
//                     <div>
//                         <button className="cancel" onClick={ ()=>b=false }>取消</button>
//                         <button className="confirm">确定</button>
//                     </div>
//                 </LoginDialog>
//             )
//         // };
//     }
//     console.log(321313123,a)
// };




export default LoginBox;
