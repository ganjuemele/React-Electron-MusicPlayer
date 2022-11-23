import styled from "styled-components"
import React,{ useState } from "react";
import axios from 'axios';

const SearchBar = styled.div`
  width: calc(100% - 116px);
  height: 42px;
  background-color: rgba(255,255,255,.96);
  position: sticky;
  top: 0;
  right: 0;
  padding: 0 30px;
  z-index: 100;
  > div {
    width: 100%;
  }
  input {
    width: 320px;
    line-height: 24px;
    background-color: rgba(88,88,88, .1);
    border-radius: 12px;
    padding: 0 15px;
  }
  button {
    color: #fff;
    background-color: orangered;
    padding: 0 10px;
    border-radius: 12px;
  }
`

const SearchBar_Head = ()=> {

    return (
        <SearchBar className="alignCenter justifyBetween">
            <div className="justifyBetween">
                <p></p>
                <p></p>
                <p></p>
                <input type="text" placeholder="搜索"/>
                <button onClick={ onRegister }>注册</button>
                <button onClick={ onLogin }>登录</button>
            </div>
        </SearchBar>
    )
}

const onRegister = ()=>{

    axios.get('http://101.43.109.126:3000/userData?loginOrReg=regist&username=么了')
        .then()
        .catch(res => {
            console.log('onRegister',res)
        });
}
const onLogin = function(){
    axios.get('http://101.43.109.126:3000/userData?loginOrReg=login&username=么了')
        .then()
        .catch(res => {
            console.log('onLogin',res)
        });
}

export default SearchBar_Head;
