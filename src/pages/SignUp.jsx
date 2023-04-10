import React from "react";
import { Link } from "react-router-dom";

function SignUp(){
  return(
    <>
    <h1>회원가입</h1>
    <input type="text" placeholder="ID를 입력해주세요" />
    <input type="password" placeholder="PW를 입력해주세요" />
    <Link to="/">로그인</Link>
    </>
  )
}

export default SignUp;