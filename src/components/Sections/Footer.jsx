import React from 'react'
import { Navbar } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-6 col-lg-4">
                        <Navbar.Brand href="#home">
                            <img src="images/ITLive_Red_Logo.png" alt="Logo Image" />
                        </Navbar.Brand>
                    </div>
                    <div className="col-6 col-lg-8 text-end text-lg-center d-block d-lg-flex">
                        <p className="comment-text m-0">
                            Copyright © IT live 2022. Все права защищены
                        </p>
                        <p className="comment-text text-end m-0 ms-auto">
                            Created by <a href="#">IT-Live</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
