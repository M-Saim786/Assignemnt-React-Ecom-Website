import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
// import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
// import { AuthApp } from '../Config/Firebase';
// import {signInWithEmailAndPassword} from 'firebase/auth'
import './Style.css'
export default function Login() {
  let Navigate = useNavigate()
  
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const inputStyle = {
    width: '80%'
  }
  const HandleEmail = (e) => {
    setEmail(e.target.value)
    // console.log(Email)
  }
  const HandlePassword = (e) => {
    setPassword(e.target.value)
    // console.log(Password)
  }
  const LoginFunc = async(e) => {
    e.preventDefault()
    console.log(Email, Password)
//     if (Email=='' || Password == '') {
//       toast.warn('Enter Correct Credientials', {
//         hideProgressBar: true
//       })
//     }
//     else {
//       try{
//       const Login = await signInWithEmailAndPassword(AuthApp, Email, Password)
//       toast.success('Login Success...!')
//       localStorage.setItem('Email', Email)
//       localStorage.setItem('Password', Password)
//       Navigate('/stepper')

//       }
//       catch(err){
// console.log(err)
//       }
//     }
  }
  return (
    <>
      <div className="SignUpcontainer">
        <h1>Login Page</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField type='email' id="outlined-basic" label="Enter Email" variant="outlined" className='inputFie' style={inputStyle} onChange={HandleEmail} autoFocus />
          <TextField type='password' id="outlined-basic" label="Enter Password" variant="outlined" className='inputFie' style={inputStyle} onChange={HandlePassword} />

        </Box>
        <div className="btns">
            
        <Button type='submit' variant='outlined' onClick={LoginFunc}  >
          Login
        </Button>
        </div>

        <p>Don't Have Account <Link to='/signUp'>SignUp</Link></p>

      </div>
      <ToastContainer />
    </>

  )
}
