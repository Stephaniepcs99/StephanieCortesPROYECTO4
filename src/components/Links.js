
import React from 'react'
import { BrowserRouter as Router, Routes, Switch, Route, LinkProps,Link } from 'react-router-dom'
import Conocenos from '../pages/Conocemos'
import Menu from '../pages/MenuPages'

function desplegar() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Enl = () => {
  return (
    <div>
      <Router>
      <div className="header">

            <div id='navbarBasicExample' className=' navbar-menu is-active'>
            <div className='navbar-brand'>
              <a href='/'>
                <img className='' src='/images/logoca.png' width="98" height="58" alt='' />
              </a>

              <a href='/' role='button' className='navbar-burger ' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample' >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
              <div className='navbar-end' id='links'>
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
            <Menu/>
          </Route>
          <Route path="/reservaciones" >
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Enl

