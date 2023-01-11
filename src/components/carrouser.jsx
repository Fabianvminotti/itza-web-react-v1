import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Carrousel = (props) => {
    
    console.log(props)
    return (
        <div className="d-flex justify-content-center" style={{ padding: '60px' }}>
          <div className='text-center' style={{ width: "60%", minWidth: "400px" }}>
            <div className='section-title ' id='portfolio'>
              <h2>Nuestro trabajo</h2>
            </div>
            <Carousel>
              <div>
                <img src='img/galeria1000x1000/IMG_20210803_210722_815.jpg' />
                {<p className="legend">Preparacion de relevamiento con VANT</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20210911_161148.jpg' />
                {<p className="legend">Relevamiento topografico con VANT en la localidad de Aldea Brasilera</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20211127_173814.jpg' />
                {<p className="legend">Uno de los equipos utilizados</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20220107_093039.jpg' />
                {<p className="legend">Colocacion de punto de apoyo fotogrametrico (PAF)</p>}
              </div>
            </Carousel>
          </div>
        </div>
      );
}

//export default Carrousel