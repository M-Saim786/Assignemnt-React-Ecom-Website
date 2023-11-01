import React, { useState } from 'react'
import { auth } from '../Config/Firebase'
import { db } from '../Config/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

import { ref, set, push, get, } from 'firebase/database'
import './Style.css'
// import { create } from '@mui/material/styles/createTransitions'
export default function SignUp() {
    let Navigate = useNavigate()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const HandleEmail = (e) => {
        setEmail(e.target.value)
    }
    const HandlePassword = (e) => {
        setPassword(e.target.value)
    }
    // Select Role
    const [Role, setRole] = useState('')
    const HandleRadioAdmin = (e) => {
        setRole(e.target.value)
        console.log(e.target.value)
    }
    const HandleRadioUser = (e) => {
        setRole(e.target.value)
        console.log(e.target.value)
    }
    const SubmitData = async (e) => {
        e.preventDefault()
        console.log(Email, Password)
        console.log(Role)
        if (Email == '' || Password == '') {
            // alert("Enter")
            toast.warn('Enter Correct Data', {
                hideProgressBar: true,
            })
        }
        else {
            try {

                const SignUp_Auth = await createUserWithEmailAndPassword(auth, Email, Password)
                const dbref = ref(db, 'users')
                const key = push(dbref)
                let newkey = key.key
                console.log(newkey)
                console.log(Email, newkey, Password)
                set((dbref, key), {
                    Email: Email,
                    Password: Password,
                    // Role:Role,

                })

            }
            catch (err) {
                console.error(err)
            }
            console.log(Email, Password)
        }
    }
    return (
        <>
            <div className="SignUpcontainer" >
                <h1>Sign Up Page</h1>

                <Box
                    component="form"
                    noValidate
                    autoComplete="off">
                    <TextField id="outlined-basic" label="Enter First Name" variant="outlined" autoFocus className='input' />
                    <TextField id="outlined-basic" label="Enter Last Name" variant="outlined" className='input' />
                    <TextField type='email' id="outlined-basic" label="Enter Email" variant="outlined" onChange={HandleEmail} className='mainField input' value={Email} />

                    <TextField type='password' id="outlined-basic" label="Enter Password" variant="outlined" onChange={HandlePassword} className='mainField input' value={Password} />
                    <br />
                    <br />
                    <br />

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Select Role</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" onChange={HandleRadioAdmin} />
                            <FormControlLabel value="user" control={<Radio />} label="User" onChange={HandleRadioUser} />
                            {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                        </RadioGroup>
                    </FormControl>



                </Box>
                <div className="btns">
                    <Button variant='outlined' type='button' onClick={SubmitData} >
                        Sign Up
                    </Button>
                    {/* <Button variant='outlined' onClick={gotoNext}>
                        Next
                    </Button> */}
                </div>
                <div className='loginDiv' >
                    <p>Already Have account <Link to='/login' >
                        Login</Link> </p>
                </div>


            </div>
            <ToastContainer />
        </>
    )
}
