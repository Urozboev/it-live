import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import SignUpModal from "./SignUpModal"
import SignInModal from "./SignInModal"

function SignInUp({ showProfil }) {
    const [isOpenUp, setIsOpenUp] = useState(false);
    const [isOpenIn, setIsOpenIn] = useState(false);

    const handleShowModalUp = () => {
        setIsOpenUp(!isOpenUp);
    }
    const handleShowModalIn = () => {
        setIsOpenIn(!isOpenIn);
    }
    return (
        <div className='d-flex align-items-center justify-content-center justify-content-lg-end'>
            <Dropdown className="lang-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="me-2 d-flex align-items-center">
                    <i className="fal fa-language fs-3"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="active" href="#/action-1">O'zbekcha</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Русский</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <button
                onClick={() => {
                    handleShowModalUp()
                }}
                className="my-link-btn"
            >
                Ro'yxatdan o'tish
            </button>
            <button
                onClick={() => {
                    handleShowModalIn()
                }}
                className="my-pink-btn"
            >
                Kirish
                <i className="fas fa-arrow-right"></i>
            </button>

            {isOpenUp ? <SignUpModal handleShowModalUp={handleShowModalUp} /> : ''}
            {isOpenIn ? <SignInModal handleShowModalIn={handleShowModalIn} /> : ''}
        </div>
    )
}

export default SignInUp