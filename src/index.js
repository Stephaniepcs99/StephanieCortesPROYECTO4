import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.css'
import Header from './components/ind'
import Main from './components/main'




const Layout = () => {
  return(
    <div className='main'>
      <Header/>
      <Main/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);
