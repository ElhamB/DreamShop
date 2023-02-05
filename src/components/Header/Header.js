import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggleAction } from '../../store/UI';
import { logout,login } from '../../store/Auth';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  const dispatch = useDispatch();
  const user=useSelector(state=>state.auth.user);
  const cartItems = useSelector(state => state.cart.cartItems);
  const [cartTotalCount, setCartTotalCount] = useState(0);
  useEffect(() => {
    setCartTotalCount(cartItems.reduce((acc, item) => acc + item.qty, 0));
  }, [cartItems]);

  useEffect(()=>{
    const storedisloggedIn=localStorage.getItem("isLoggedIn");
    if(storedisloggedIn ===1){
      console.log("hi")
    }
    },[dispatch]);
  const toggleCartHandler = () => {
    dispatch(cartToggleAction())
  }
  const logoutHandler=()=>{
    dispatch(logout())
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
                <Link className="nav-link" to="/search">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
            </ul>
            <ul className='d-flex right-menu'>
              <li><button><i className='fa fa-search'></i></button></li>
             {!user && <li><Link to='/login'><i className='fa fa-user-o'></i></Link></li>} 
              { user && (<li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className='fa fa-user-o'></i> {user.firstName} 
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                  <li><Link className="dropdown-item" to="/favorites">favorites</Link></li>
                  <li><Link className="dropdown-item" onClick={logoutHandler} >Logout</Link></li>
                </ul>
              </li>)}
              <li><button onClick={toggleCartHandler}><i className='fa fa-shopping-cart'></i><span className='badge rounded-pill bg-warning'>{cartTotalCount}</span></button></li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
