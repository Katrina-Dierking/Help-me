import React from 'react'

export default function Register() {
  return (
    <form method="POST" action="">
        <input type='email' placeholder='Email' min='8' name='email' required />
        <input type='password' placeholder='Create a password' name='password' required />
        <input type='submit' value='Register'/>
        <input type='Reset' />
    </form>
  )
}
