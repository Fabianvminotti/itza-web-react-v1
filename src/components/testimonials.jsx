export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Algunos de nuestros clientes</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      <img src={d.img} alt='' />{' '}
                   
                    </div>
                  </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
