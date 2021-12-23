//importamos react
import React from 'react';
//importamos axios
import axios from 'axios';

export const useSendData = (data) => {
  console.log('soy el data', data)
  //si el dato en el texto y en el author es diferente a los existentes lo retornara
  if (!data.nombre || !data.apellido || !data.email || !data.telefono || !data.personas || !data.fecha || !data.hora || !data.text) {
    return
  }
  
  //axios recibira de parametros la URL y el data (DONDE ESTAN LOS DATOS A CACHAR)
  axios.post('http://localhost:5000/reserv', data)
  //Cuando termine lo anterior se enviara la respuesta  
  .then(response => {
      console.log(response);
      return response
    })
}