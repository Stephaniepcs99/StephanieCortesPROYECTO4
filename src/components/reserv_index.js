import React from 'react'

const reserv_index = () => {
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
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input' type='text' placeholder='Nombre' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1638663741~hmac=1a8c7ca571898f650bd59c6e9c1da3bc' alt='..' />
                                        </span>
                                    </p>
                                </div>
                                <div className='field'>
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input' type='text' placeholder='Apellido' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1638663741~hmac=1a8c7ca571898f650bd59c6e9c1da3bc' alt='..' />
                                        </span>
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
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input' type='email' placeholder='ejemplo@gmail.com' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons.flaticon.com/png/512/3686/premium/3686989.png?token=exp=1638666344~hmac=297e6091bbda622b692f3f5b68961b44' alt='..' />
                                        </span>
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
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input' type='email' placeholder='Telefono' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons.flaticon.com/png/512/3247/premium/3247310.png?token=exp=1638666502~hmac=945f1819c508d3ec08be1d387da22a2b' alt='..' />
                                        </span>
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
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input' type='number' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons.flaticon.com/png/512/3224/premium/3224689.png?token=exp=1638668935~hmac=772608872be9c2a0b906c8dbd414aeb0' alt='..' />
                                        </span>
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
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input' type='date' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons-png.flaticon.com/512/425/425868.png' alt='..' />
                                        </span>
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
                                    <p className='control is-expanded has-icons-left'>
                                        <input className='input time' type='time' />
                                        <span className='icon is-small is-left'>
                                            <img className='iUser' src='https://cdn-icons-png.flaticon.com/512/6346/6346665.png' alt='..' />
                                        </span>
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
                                        <textarea className='textarea' placeholder='Escribe aqui tus Comentarios'></textarea>
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
                            <div className='field-body'>
                                <div className='field'>
                                    <div className='control '>
                                        <button className='button is-primary'>
                                            ENVIAR RESERVACION
                                        </button>
                                    </div>
                                </div>
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

export default reserv_index
