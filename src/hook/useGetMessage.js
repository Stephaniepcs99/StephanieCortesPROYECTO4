import React, { useEffect } from 'react'
import axios from 'axios'

export const useGetMessage = () => {
  useEffect(() => {
    axios.get('http://localhost:5000/reserv')
      .then((response) => 
      console.log(response.data)) // nos muestra todo lo que tenemos en nuestra base de datos
  }, [])
}