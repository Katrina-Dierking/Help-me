import React from 'react'

export default function Login() {
  return (
    <div className="login-wrapper">
        <input type="text" className="login-userName" placeholder='username'/>
        <input type="password" className="password" placeholder='password'/>
        <button className="login-submit">Login</button>
    </div>
  )
}
