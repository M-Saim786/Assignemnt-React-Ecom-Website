import { Button } from '@mui/material'
import React from 'react'

export default function Cards({ PName, PDesc, Price, imgUrl }) {
    return (
        <>
            <div className="col col-lg-3 col-md-4 col-sm-6 col-12  my-2">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imgUrl} className="card-img-top" alt="" style={{ height: '35vh' }} />
                    <div className="card-body" >
                        <h5 className="card-title">
                            {PName}
                        </h5>
                        <p className="card-text">
                            {PDesc}
                        </p>
                        <p className="card-text">
                            Product Price: {Price}$
                        </p>
                        <Button type='submit' variant='contained'  >
                            Order Now
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}
