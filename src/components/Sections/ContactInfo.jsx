import React from 'react'

function ContactInfo() {
    return (
        <section id='contact-info'>
            <div>
                <div className="row border-bottom py-5">
                    <div className="col-12 col-sm-6">
                        <p className="contact-info-text">
                            Единый сервисный номер:
                        </p>
                    </div>
                    <div className="col-12 col-sm-6">
                        <a href="#" className="contact-info-link text-start text-sm-end">
                            <i className="fad fa-phone-alt"></i>
                            +998 (33) 408-28-08
                        </a>
                    </div>
                </div>
                <div className="row border-bottom py-5">
                    <div className="col-12 col-sm-6">
                        <p className="contact-info-text">
                            Наши социальные адреса:
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end">
                        <a href="#" className="contact-info-link me-4 me-sm-0 ms-sm-4">
                            <i className="fab fa-twitter m-0"></i>
                        </a>
                        <a href="#" className="contact-info-link me-4 me-sm-0 ms-sm-4">
                            <i className="fab fa-instagram m-0"></i>
                        </a>
                        <a href="#" className="contact-info-link me-4 me-sm-0 ms-sm-4">
                            <i className="fab fa-facebook-f m-0"></i>
                        </a>
                        <a href="#" className="contact-info-link me-4 me-sm-0 ms-sm-4">
                            <i className="fab fa-telegram-plane m-0"></i>
                        </a>
                    </div>
                </div>
                <div className="row align-items-center py-5">
                    <div className="col-12 col-sm-6">
                        <p className="contact-info-text m-0">
                            Наш адрес:
                        </p>
                        <a href="#" className="contact-info-link">
                            <i className="fas fa-map-marker-alt"></i>
                            ул. Коратош, 103, 31
                        </a>
                    </div>
                    <div className="col-12 col-sm-6">
                        <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.829560053579!2d68.77922410965328!3d40.49637294494606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b207c6112cc173%3A0x2433786b46856950!2sBarkamol%20Avlod%20Markazi!5e0!3m2!1suz!2s!4v1665926109040!5m2!1suz!2s" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
