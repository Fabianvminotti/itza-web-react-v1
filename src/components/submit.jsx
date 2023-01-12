import React from 'react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Submit(props) {
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwnProperty(data, 'errors')) {
              status.innerHTML = data.errors.map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    //form.addEventListener("submit", handleSubmit)
  return (
    <Fragment>

    {/* <form id="my-form" action="https://formspree.io/f/mdovovwy" method="POST">
    <label>Email:</label>
    <input type="email" name="email" />
    <label>Message:</label>
    <input type="text" name="message" />
    <button id="my-form-button" onclick={handleSubmit}>Submit</button>
    <p id="my-form-status"></p>
  </form> */}
<div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contactenos                  <FontAwesomeIcon icon="fa-solid fa-check-square" />
</h2>
                <p>
                  Por favor complete el formulario y nos pondremos en contacto a la brevedad!
                </p>
              </div>
              <form id="my-form" action="https://formspree.io/f/mdovovwy" method="POST">
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nombre'
                        required
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Mensaje'
                    required
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button id="my-form-button" onclick={handleSubmit} className='btn btn-custom btn-lg'>
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Información de contacto</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Dirección
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefono de contacto
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'}>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; ITZA SIG & ingenieria. Design by Fabian Minotti
          </p>
        </div>
      </div>
    </div>
    </Fragment>

  );
}
// function Submit() {
//   return (
//     <ContactForm />
//   );
// }
export default Submit;