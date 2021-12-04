import React from 'react'

const Left=() => {
    return(
      <div className='left'>
        <h2>Yo soy Left</h2>
      </div>
    )
  }
  
  const Middle=() => {
    return(
      <h2>Yo soy Middle</h2>
    )
  }
  
  const Rigth=() => {
    return(
      <h2>Yo soy Rigth</h2>
    )
  }

const main = () => {
    return (
      <div className='columns'>
        <div className='column'>
          <Left/>
        </div>
        <div className='column'>
          <Middle/>
        </div>
      </div>
      //<div className='content'>
      //  <h1>hola</h1>
      //  {children}
      //</div>
    )
  }

export default main
