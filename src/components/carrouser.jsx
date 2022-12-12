import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Carrousel = (props) => {
    
    console.log(props)
    return (
<div style={{ padding: '60px' }}>
<div className='section-title'>
          <h2>Nuestro trabajo</h2>
          
        </div>
<Carousel>
            
                    
            <div>
                            <img src='img/team/nacho.png' />
                            {<p className="legend">Ignacio olguin</p>}
                        </div>
                        <div>
                            <img src='img/team/mino.png' />
                            {<p className="legend">Fabian Minotti</p>}
                        </div>
                   

        </Carousel>

</div>

        
    );
}

//export default Carrousel