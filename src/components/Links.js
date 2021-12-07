
import React from 'react'
import { BrowserRouter as Router, Routes, Switch, Route, LinkProps,Link } from 'react-router-dom'
import Conocenos from '../pages/Conocemos'

const Enl = () => {
  return (
    <div>
      <Router>
      <div className="header">
      <div className='navbar-brand'>
              <a href='/' className='navbar-item'>
                <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' alt='texto significativo' />
              </a>

              <a href='/' role='button' className='navbar-burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
              </a>
            </div>

            <div id='navbarBasicExample' className=' navbar-menu '>
              <div className='navbar-end'>
                <Link to="/conocenos" className='has-text-black navbar-item'>
                  Conocenos
                </Link>

                <Link to="/menu" className='has-text-black navbar-item'>
                  Menu
                </Link>

                <Link to="/reservaciones" className='has-text-black navbar-item'>
                  Reservacion
                </Link>

              </div>

            </div>
          </div>
          <Switch>
          <Route path="/conocenos" >
            <Conocenos/>
          </Route>
          <Route path="/menu" >
          </Route>
          <Route path="/reservaciones" >
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Enl

