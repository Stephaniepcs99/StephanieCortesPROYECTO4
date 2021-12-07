import { BrowserRouter as Router, Switch, Route, LinkProps } from 'react-router-dom'
import React, {useState} from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bulma/css/bulma.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/Ind'
import Main from './components/Main'
import ReservInd from './components/Reserv_index'
import Footer from './components/Footer'
import { useSendData } from './hook/useSendData'
import { useGetMessage } from './hook/useGetMessage';
import Ind2 from './components/Ind2'


const Layout = () => {
  const [nombreState,setNombreState]=useState()
  const [apellidoState,setApellidoState]=useState()
  const [emailState,setEmailState]=useState()
  const [telefonoState,setTelefonoState]=useState()
  const [personasState,setPersonasState]=useState()
  const [fechaState,setFechaState]=useState()
  const [horaState,setHoraState]=useState()
  const [textState,setTextState]=useState()
  
  console.log(useGetMessage());

  return(
    <div>
      <Header/>
      <Main/>
      <ReservInd setNombre={setNombreState} setApellido={setApellidoState} setEmail={setEmailState} setTelefono={setTelefonoState} setPersonas={setPersonasState} setFecha={setFechaState} setHora={setHoraState} setText={setTextState}/>
      <div className='field-body'>
            <div className='field'>
                <div className='control '>
                    <button className='button is-primary' onClick={useSendData({nombre: nombreState,apellido: apellidoState, email: emailState, telefono: telefonoState, personas: personasState, fecha: fechaState, hora: horaState, text:textState })}>
                        ENVIAR RESERVACION
                    </button>
                </div>
            </div>
        </div>
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
