import React,{useState} from 'react'

const Reserv_index = () => {
const [inputState,setInputState] = useState({})

    return (
        <div className="reservacion">
            <h1 className='tiRev'>REALIZA TU RESERVACION AHORA</h1>
            <div className='formulario'>
                <div className='columns'>
                    <div className=' column '></div>
                </div>
                <div className='columns formrev'>
                    <div className='formargin column '>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Nombre</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <p className='control is-expanded '>
                                        <input className='input' type='text' placeholder='Nombre' onChange={(e) => setInputState({nombre: e.target.value})} />
                                    </p>
                                </div>
                                <div className='field'>
                                    <p className='control is-expanded '>
                                        <input className='input' type='text' placeholder='Apellido' onChange={(e) => setInputState({apellido: e.target.value})} />
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formargin column'>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Email</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <p className='control is-expanded '>
                                        <input className='input' type='email' placeholder='ejemplo@gmail.com' onChange={(e) => setInputState({email: e.target.value}) }/>
                                       
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formargin column'>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Telefono</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <p className='control is-expanded '>
                                        <input className='input' type='text' placeholder='Telefono' onChange={(e) => setInputState({telefono: e.target.value})} />
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='columns'>
                    <div className='formargin column '>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Personas</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <p className='control is-expanded '>
                                        <input className='input' type='number' onChange={(e) => setInputState({personas: e.target.value})} />
                                       
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formargin column'>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Fecha</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <p className='control is-expanded '>
                                        <input className='input' type='date' onChange={(e) => setInputState({fecha: e.target.value})}/>
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formargin column'>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Hora</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <p className='control is-expanded'>
                                        <input className='input time' type='time' onChange={(e) => setInputState({hora: e.target.value})} />
                                       
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='columns formrev2'>
                    <div className='column'>
                        <div className='field is-horizontal'>
                            <div className='field-label is-normal'>
                                <label className='label'>Comentarios</label>
                            </div>
                            <div className='field-body'>
                                <div className='field'>
                                    <div className='control'>
                                        <textarea className='textarea' placeholder='Escribe aqui tus Comentarios' onChange={(e) => setInputState({text: e.target.value})}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        </div>
                        <div className='columns'>
                            <div className=' column '>
                            <div className='field is-horizontal'>
                            <div className='field-label'>
                            </div>
                        </div>
                            </div>
                        </div>
                    <div className='columns'>
                            <div className=' column '></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Reserv_index
