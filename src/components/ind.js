import React from 'react'

const ind = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
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

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <a href='/' className='navbar-item'>
              Conocenos
            </a>

            <a href='/' className='navbar-item'>
              Menu
            </a>

            <a href='/' className='navbar-item'>
              Reservacion
            </a>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default ind
