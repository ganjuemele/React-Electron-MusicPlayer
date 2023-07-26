import styled from "styled-components"
import React,{useEffect,useState,useRef} from "react";
import axios from 'axios';
import LoginBox from "./LoginBox";

const SearchBar = styled.div`
  width: calc(100vw - 176px);
  height: 42px;
  background-color: rgba(255,255,255);
  position: sticky;
  top: 0;
  right: 0;
  z-index: 100;
  margin-left: 176px;
  //display: flex;
  padding-top: 9px;
  & > div {
    width: 100%;
    & input {
        width: 360px;
        line-height: 24px;
        background-color: rgba(88,88,88, .1);
        border-radius: 12px;
        padding: 0 15px;
    }
    & button {
      color: #fff;
      background-color: orangered;
      padding: 0 10px;
      border-radius: 12px;
      margin-right: 30px;
    }
  }
`
// let loginBoxClassName = 'LoginBox justifyCenter';
// let get =
const SearchBar_Head = ()=> {
    // loginBoxClassName = 'LoginBox justifyCenter';
    const [isShowLogin, setShowLogin] = useState(false)
    // if(isShowLogin){
    //     loginBoxClassName += ' zhanshi';
    //     console.log(true)
    // } else {
    //     loginBoxClassName += ' hideLoginBox Nozhanshi';
    // }
    return (
        <SearchBar>
            <div className="alignCenter justifyBetween">
                <b></b>
                <input type="text" placeholder="搜索"/>
                <div>
                    <button onClick={ ()=>setShowLogin(true) }>注册</button>
                    <button onClick={ onLogin }>登录</button>
                </div>
            </div>
            <LoginBox data={isShowLogin}/>
        </SearchBar>
    )
}

const onRegister = ()=>{
    axios.get('http://101.43.109.126:3000/userData?loginOrReg=regist&username=么了')
        .then()
        .catch(res => {
            console.log('onRegister', res)
        })
};
const onLogin = function(){
    axios.get('http://101.43.109.126:3000/userData?loginOrReg=login&username=么了')
        .then()
        .catch(res => {
            console.log('onLogin', res)
        })
};

export default {SearchBar_Head,};
