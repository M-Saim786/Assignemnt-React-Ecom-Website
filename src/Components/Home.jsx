import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { CardMembershipOutlined } from '@mui/icons-material'
export default function Home() {
    const [Data, setData] = useState([])
    const [loadinger, setloadinger] = useState(false)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) =>
                res.json(), 
                setloadinger(true)
                )
            .then((res) => {
                setData(res)
                setloadinger(false)

                // console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        // console.log(Data)
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h2 className='my-5'>Welcome to Our Store..!</h2>
                    {
                        // loadinger == true?
                        // <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
                        // :
                        Data.map((data, index) => {
                            return (
                                <>
                                    <Cards imgUrl={data.image} PName={data.title.slice(0, 22) + '...'} PDesc={data.description.slice(0, 50) + '...'} Price={data.price} key={index} />
                                </>
                            )
                        })
// :<img src='https://i.gifer.com/origin/d3/d3f472b06590a25cb4372ff289d81711_w200.gif' style={{width:'20%' , margin:'10px auto'}} />
                       
                    }
                </div>
            </div>


        </>
    )
}
