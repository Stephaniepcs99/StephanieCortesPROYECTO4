import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/ind'
import Main from './components/main'
import ReservInd from './components/reserv_index'
import Footer from './components/footer'


const Layout = () => {
  return(
    <div>
      <Header/>
      <Main/>
      <ReservInd/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);
