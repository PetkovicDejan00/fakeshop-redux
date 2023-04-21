import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/actions/productActions'
import { useNavigate } from 'react-router-dom'
import { errorPopup, successPopup } from '../components/Popup'

const database = [
  {
    username: "user1",
    password: "user1_password"
  },
  {
    username: "user2",
    password: "user2_password"
  }
]

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = database.find((user) => user.username === username)
    console.log(userData)

    if (userData) {
      if (userData.password !== password) {
        errorPopup('Password is invalid.')
      } else {
        dispatch(logIn())
        navigate((-1), {replace: true})
        successPopup('Logged in successfully.')
      }
    } else {
      errorPopup('Username is invalid.')
    }
  }

  return (
    <section className="login-page">
     <form className="container" onSubmit={handleLogin} data-aos="flip-left">
        <h1>Login</h1>
        <input 
          className="input" 
          placeholder="Username" 
          type="text" 
          name="uname" 
          onChange={(e) => setUsername(e.target.value)}
          required />
        <input 
          className="input" 
          placeholder="Password" 
          type="password" 
          name="pass"
          onChange={(e) => setPassword(e.target.value)}
          required />
        <div className="button-container">
          <input type="submit" />
        </div>
     </form>
   </section>
  )
}

export default Login