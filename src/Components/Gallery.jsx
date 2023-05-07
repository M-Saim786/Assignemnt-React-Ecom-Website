import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import './Gallery.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
export default function Gallery() {
    const [ImgData, setImgData] = useState([])
   const [loading, setloading] = useState(false)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) =>
                res.json(),
                setloading(true)
                )
            .then((res) => {
                // console.log(res)
              setImgData(res)
              setloading(false)
            })

    }, [])
    const ImgStyle = {
        height: '40vh',
        // width:'10%'
    }
    return (
        <>
            <Container>
                <h2>Welcome To Our Gallery..!</h2>
                <Row>
                    {
                        loading ==true ?
                        <img src='https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif' style={{width:'20%' , margin:'10px auto'}} />
                        :
                        ImgData.map((img) => {
                            console.log(img)
                            return (<>
                                <div className="col col-lg-3 col-md-4 col-sm-6 col-12 mx-4" >

                                    <Card className=' Card' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img.image} style={ImgStyle} className='CardImg' />
                                        <Card.Body className='overlay'>
                                            <Card.Title className='text' >
                                                <CallMadeIcon className='icon' />
                                                <span className='cardTitle'>

                                                    {img.title}
                                                </span>
                                            </Card.Title>

                                        </Card.Body>
                                    </Card>
                                </div>

                            </>

                            )
                        })

                    }

                </Row>

            </Container>

        </>
    )
}
