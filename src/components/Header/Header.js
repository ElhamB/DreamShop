import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { CartToggleAction } from '../../store/UI';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  const dispatch = useDispatch();
  const carTotalQuantity=useSelector(state=>state.cart.totalQuantity);
  console.log("carTotalQuantity :"+ carTotalQuantity)
  const toggleCartHandler = () => {
    dispatch(CartToggleAction())
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Dream Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact us</Link>
              </li>
            </ul>
            <ul className='d-flex right-menu'>
              <li><button><i className='fa fa-search'></i></button></li>
              <li><Link to='#'><i className='fa fa-user-o'></i></Link></li>
              <li><button onClick={toggleCartHandler}><i className='fa fa-shopping-cart'></i><span className='badge rounded-pill bg-warning'>{carTotalQuantity}</span></button></li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
