import styled from "styled-components"
import React from "react";

const SearchBar = styled.div`
  width: calc(100% + 60px);
  height: 42px;
  background-color: rgba(255,255,255,.96);
  position: sticky;
  top: 0;
  padding: 0 30px;
  z-index: 100;
  > div {
    width: 100%;
  }
  input {
    width: 300px;
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
                <p></p><p></p>
                <input type="text" placeholder="搜索"/>
                <button>注册</button>
                <button>登录</button>
            </div>
        </SearchBar>
    )
}

export default SearchBar_Head;
