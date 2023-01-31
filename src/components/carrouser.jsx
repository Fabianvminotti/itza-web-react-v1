import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Carrousel = (props) => {
    
    console.log(props)
    return (
        <div id='portfolio' class="text-center" style={{ padding: '60px' }}>

          <div className='text-center' style={{ width: "60%", minWidth: "400px" }}>
            <div className='section-title ' id='portfolio'>
              <h2>Nuestro trabajo</h2>
            </div>
            <Carousel>
              {/* <div>
                <img src='img/galeria1000x1000/IMG_20210803_210722_815.jpg' />
                {<p className="legend">Preparacion de relevamiento con VANT</p>}
              </div> */}
              {/* <div>
                <img src='img/joa_drone.jpeg' />
                {<p className="legend">Preparación de equipos para un vuelo fotogrametrico</p>}
              </div> */}
             
              <div>
                <img src='img/galeria1000x1000/566.jpg' />
                {<p className="legend">Preparación de equipos para un vuelo fotogrametrico</p>}
              </div>
             
              <div>
                <img src='img/galeria1000x1000/IMG_20210911_161148.jpg' />
                {<p className="legend">Relevamiento topografico con VANT en la localidad de Aldea Brasilera, Entre Rios</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20211127_173814.jpg' />
                {<p className="legend">Uno de los equipos utilizados</p>}
              </div>
              
              <div>
                <img src='img/galeria1000x1000/234.jpg' />
                {<p className="legend">Nuestra participacoon en el programa Capital Activa de la Municipalidad de Santa Fe</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20220107_093039.jpg' />
                {<p className="legend">Colocacion de punto de apoyo fotogrametrico (PAF)</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20220419_222623_639 (1).webp' />
                {<p className="legend">Relevamiento de cursos de agua en la zona de San Javier</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20220420_133807_292 (1).webp' />
                {<p className="legend">Mapa con alturas medidas en el departamento Garay, Santa Fe</p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG_20220420_133807_209 (1).webp' />
                {<p className="legend">Procesamiento de imagenes satelitales para obtener el indice NDWI </p>}
              </div>
              <div>
                <img src='img/galeria1000x1000/IMG-20220128-WA0015 (1).jpg' />
                {<p className="legend">Relevamiento topografico en la ciudad de Necochea, Buenos Aires</p>}
              </div>
            </Carousel>
          </div>
        </div>
      );
}

//export default Carrousel