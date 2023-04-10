import React from 'react';
import { Link } from 'react-router-dom';


function Login(){
  return(
  <>
  <h1>로그인</h1>
    <input type="text" placeholder="ID를 입력해주세요"/>
    <input type="password" placeholder="PW를 입력해주세요"/>
    <button>로그인</button>
    <Link to="/SignUp">회원가입</Link>
  
  </>
  )
}

export default Login;