import React, { Component } from 'react'
import './Footer.css'
import { Button } from '@mui/material'
import { Row } from 'react-bootstrap'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer>

                    <div className="footUp">
                        <h2>Join Our Community that is commited to making a difference in World </h2>
                        <div className="footerbtnDiv">

                            <Button variant='outlined' className='footerUpBtn'>
                                Join a Community
                            </Button>
                            <Button variant='outlined' className='footerUpBtn'>
                                Create a Community
                            </Button>
                        </div>

                        {/* <div className="sidestyle">

               </div> */}

                    </div>
                    <div className="footDn">
                        <ul className='contactUs__Ul'>
                            <h4>Connect with Us</h4>
                            <li>
                                <AiFillFacebook />
                                Facebook</li>
                            <li>
                                <AiOutlineTwitter />
                                Twitter</li>
                            <li>
                                <AiOutlineInstagram />
                                Instagram</li>
                            <li>
                                <AiOutlineWhatsApp />
                                Whatsapp</li>
                        </ul>
                    </div>
                    <div className="copyrightDiv">
                        <p>© 2023 Spark Shop . All rights reserved.</p>
                        <ul>
                            <li>Terms</li>
                            <li>Services</li>
                            <li>Policy</li>
                        </ul>
                    </div>

                </footer>



            </>
        )
    }
}
