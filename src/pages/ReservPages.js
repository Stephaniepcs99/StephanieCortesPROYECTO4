import React, {useState} from 'react';
import ReservInd from '../components/Reserv_index'
import { useSendData } from '../hook/useSendData'
import { useGetMessage } from '../hook/useGetMessage';

const ReservPages = () => {
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
    </div>
  )
}

export default ReservPages
