import React from 'react'


const main = () => {
    return (
        <div className='columns'>
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
                                    Este pastel lo tiene todo porque por supuesto va repleta de chocolate,
                                    su textura cremosa es de lo más apetecible
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='tarjeta-wrap'>
                        <div className='tarjeta'>
                            <div className='adelante tarjeta2'> </div>
                            <div className='atras'>
                                <p>
                                    Este pastel es una combinación deliciosa de base crujiente de galletas o
                                    de masa brisa,con un relleno muy cremoso con sabor y aroma de limones frescos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default main
