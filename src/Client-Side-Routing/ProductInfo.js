import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductInfo() {

    var {id} = useParams()
    var location = useLocation()
    console.log(location)
  return (
    <>
    <h1>Product ID: {JSON.stringify(location.state.name)}</h1>
    <h1>Product Name: {JSON.stringify(location.state.price)}</h1>
    <h1>Product Price: {JSON.stringify(location.state.id)}</h1>
    </>
  )
}

export default ProductInfo