import React from 'react'

const footer = () => {
    return (
        <footer className='foo'>

            <div className='social'>
                <div className="icon-marg">
                    <span className='icon'>
                        <img className='iconSocial' src='https://cdn-icons-png.flaticon.com/512/1384/1384005.png' alt='..' />
                    </span>
                </div>
                <div className="icon-marg">
                    <span className='icon'>
                        <img className='iconSocial' src='https://cdn-icons-png.flaticon.com/512/1384/1384007.png' alt='..' />
                    </span>
                </div>
                <div className="icon-marg">
                    <span className='icon '>
                        <img className='iconSocial' src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png' alt='..' />
                    </span>
                </div>
                <div className="icon-marg">
                    <span className='icon '>
                        <img className='iconSocial' src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' alt='..' />
                    </span>
                </div>
            </div>

            <div className="direccion">
                <p>carreta@gmail.com</p>
                <p>Emiliano Zapata S/n Col. El Bondho, Mixquiahuala 42730 México.<br/><br/></p>
            </div>

            <div className='s2 content has-text-centered'>
                <p>
                    Pagina Web por Stephanie Cortes. The source code is licensed
                    <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>.The website content
                    is licensed <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
                </p>
            </div>

        </footer>
    )
}

export default footer
