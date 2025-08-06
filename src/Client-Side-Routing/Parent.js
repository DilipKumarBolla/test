// import React from 'react'
// import Home from './Home'
// import Product from './Product'
// import About from './About'
// import {Routes, Route, Link} from 'react-router-dom'
// import ProductInfo from './ProductInfo'
// import PageNotFound from './PageNotFound'


// function Parent() {
//   return (
//    <div>
//     <ul>
//       <li><Link to='/Home'>Home</Link></li>
//       <li><Link to='/About'>About</Link></li>
//       <li><Link to='/Product'>Product</Link></li>
//     </ul>
//     <Routes>
//         <Route path='/Home' element ={<Home/>}/>
//         <Route path='/About' element ={<About/>}/>
//         <Route path='*' element ={<PageNotFound/>}/>
//         <Route path='/Product' element ={<Product/>}/>
//         <Route path=':id' element ={<ProductInfo/>}/>
//         <Route/>
        
//     </Routes>

    
//    </div>
//   )
// }

// export default Parent

import React from 'react';
import Home from './Home';
import Product from './Product';
import About from './About';
import ProductInfo from './ProductInfo';
import PageNotFound from './PageNotFound';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Footer from './Footer'

function Parent() {
    var location = useLocation()
  return (
    <div>
        { location.pathname === '/Login' && <Header/>}
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Product'>Product</Link></li>
        <li><Link to='/Login'>Login</Link></li>
      </ul>
      
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login/>} />

        

        {/* ✅ Correct nested setup */}
        <Route path='/Product' element={<Product />}>
          <Route path=':id' element={<ProductInfo />} />
        </Route>

        {/* ✅ Page not found should be last */}
        <Route path='*' element={<PageNotFound />} />
        {/* <Route path='*' element={<PageNotFound />} /> */}

      </Routes>
    { location.pathname === '/Login' && <Footer/>}
    </div>
  );
}

export default Parent;
