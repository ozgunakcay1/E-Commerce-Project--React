import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { useState } from 'react';
import api from '../api';
import { ProductContext } from '../context/productContext';




const Header = () => {
  const { setSelectedCategory } = useContext(ProductContext)

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
    .get('/products/categories')
     .then((response) => {setCategories(response.data)})
  },[])
  


  return (
    <nav className="navbar navbar-dark bg-dark sticky-top py-3 navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">  <h2 className='d-flex align-items-center gap-2'> <FaShopify className='text-warning' />Context Store</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Context</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5">
          <li className="nav-item">
            <Link className="nav-link active"  to="/" >Anasayfa</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sepet">Sepet</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Kategoriler
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
               <button onClick={() => setSelectedCategory('all')}
                className="dropdown-item">All Items</button>
                {categories.map((category) =>  (<button onClick={() => setSelectedCategory(category)}
                className="dropdown-item">{category}</button>))}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header