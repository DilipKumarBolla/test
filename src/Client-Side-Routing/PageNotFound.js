import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {

    var navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate('/Home')
        },2000)
    } )

  return (
    <>    
    <h1>PageNotFound 404</h1>
    <p>The page is working in link above link</p>
    </>

  )
}

export default PageNotFound