import logo from "./logoPequenio.png"
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src={logo} style={{height:"35px"}}/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Áreas
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Quienes Somos
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Servicios
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galeria
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Nuestros clientes
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Nuestro equipo
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
