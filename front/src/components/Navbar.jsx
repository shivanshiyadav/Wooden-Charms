import React from 'react'
import logos from '../assets/logos.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (

    <nav style={{zIndex: 5}}>
      <div className='container-fluid'>
        <ul>
          <div>
            <a href="/">
            <img className='logos' src={logos} alt="not found" />
            </a>
          </div>

          <div class="input-group  w-25  search">
            <input type="search" className="form-control" />
            <button className="brown"> search</button>
          </div>

          <li>
            <div className="icon"><img width="30" height="30" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1"/> </div><NavLink to="/">Home</NavLink></li>
          <li>
            <div className="icon"><img width="30" height="30" src="https://img.icons8.com/wired/64/user.png" alt="user" /></div><NavLink to="/Login">Log In</NavLink></li>
          <li>
            <div className="icon"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/track-order.png" alt="track-order" /></div><NavLink to="/trackorder"> Track Order</NavLink></li>
          <li>
            <div className="icon"><img width="30" height="30" src="https://img.icons8.com/ios/50/shopping-cart.png" alt="shopping-cart" /></div><a className='mt-50' href="#">Cart</a></li>

        </ul>

      </div>
      <hr />
      <div class="topnav">

        <NavLink className='second-nav' to="/Navoffer">Offer</NavLink>
        <NavLink className='second-nav' to="/bed">Bedroom</NavLink>
        <NavLink className='second-nav' to="/dining">Dinning Set</NavLink>
        <NavLink className='second-nav' to="/Study">Study and Office Furniture</NavLink>
        <NavLink className='second-nav' to="/contact">Collections</NavLink>
        <NavLink className='second-nav' to="/livingnav">Living</NavLink>
        <NavLink className='second-nav' to="/addfurniture">AddFurniture</NavLink>
        
      </div>
      <hr />
    </nav>


  )
}

export default Navbar
