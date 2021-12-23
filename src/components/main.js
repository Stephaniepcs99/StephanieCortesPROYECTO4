import React from 'react'


const Main = () => {
    return (
        <div className='secmain columns'>
            <div className='des columMain column'>
                <div>
                    <h1 className='titulo1 is-size-2' >La comida habla de nuestra cultura, herencia, raíces e influencias.</h1>
                </div>
                <div>
                    <h3 className='titulo2 is-size-4'><br /> COMIDA MEXICANA DE TRADICIÓN </h3>
                    <p className='parrafo1'><br /> Después de más de cinco décadas ininterrumpidas de ofrecer tradición,
                        calidad y buenos momentos, todos los que formamos parte del restaurante
                        La carreta reiteramos nuestro compromiso de traer lo mejor de nuestra tierra a
                        su mesa apoyando a pequeños productores de México. </p>
                </div>
            </div>

            <div id='card' className='column columMain'>
                <div>
                    <h2 className='especialidades'>Nuestras Especialidades</h2>
                </div>

                <div className='wrap'>
                    <div className='tarjeta-wrap'>
                        <div className='tarjeta'>
                            <div className='adelante tarjeta1' > </div>
                            <div className='atras'>
                                <p>
                                    No te quedes sin probar nuestras deliciosas carnes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='tarjeta-wrap'>
                        <div className='tarjeta'>
                            <div className='adelante tarjeta2'> </div>
                            <div className='atras'>
                                <p>
                                   ven y prueba nuestro delicioso Agua chile de Rib Eye
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
