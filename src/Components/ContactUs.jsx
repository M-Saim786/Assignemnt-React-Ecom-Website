import React, { useState } from 'react'
import { Formik } from 'formik'
import { Button, Input, TextareaAutosize } from '@mui/material'
import { ToastContainer, toast, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css'
import SendIcon from '@mui/icons-material/Send';
import { InputLabel } from '@mui/material';
export default function ContactUs() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Feedback, setFeedback] = useState('')
    const HandleName = (e) => {
        setName(e.target.value)
    }
    const HandleEmail = (e) => {
        setEmail(e.target.value)

    }
    const HandleFeedback = (e) => {
        setFeedback(e.target.value)
    }
    console.log(Email)
    console.log(Name)
    console.log(Feedback)
    const SendFeedback = (e) => {
        e.preventDefault()
        Email == '' || Name == '' || Feedback == '' ? toast.warn('Please enter',{
            hideProgressBar: true,

        }) : toast.success('Thanks For Your Feedback..!',{hideProgressBar: true})
    }
    return (
        <>
            <div className="container">
                <h2>Give Your Feedback To Us...!</h2>
                <div className="form">

                    <Formik>
                        <form action="">
                            <div className="inputs">
                                <InputLabel>
                                    Enter Name
                                </InputLabel>
                                <Input type='text' placeholder='Enter Name' onChange={HandleName} autoFocus />
                                <br /><br />
                                <InputLabel>
                                    Enter Email
                                </InputLabel>
                                <Input type='email' placeholder='Enter Email' onChange={HandleEmail} />
                            </div>

                            <div className="textarea">
                                <InputLabel>
                                    Enter Your Feedback
                                </InputLabel>
                                <TextareaAutosize type='text' placeholder='Enter Your Feed Back' onChange={HandleFeedback} row='10' />
                            </div>

                            <Button variant='contained' type='submit' onClick={SendFeedback} className='button' endIcon={<SendIcon />} >
                                Send Feedback
                            </Button>
                        </form>
                    </Formik>
                </div>
                <ToastContainer />
            </div>


        </>
    )
}
