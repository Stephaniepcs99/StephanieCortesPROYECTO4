import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/ind'
import Main from './components/main'
import ReservInd from './components/reserv_index'


const Layout = () => {
  return(
    <div>
      <Header/>
      <Main/>
      <ReservInd/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);
