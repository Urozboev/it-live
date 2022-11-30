import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

function Profil() {
    const { user, googleLogOut, showProfil } = UserAuth()

    const handleGoogleLogOut = async (e) => {
        e.preventDefault()
        try {
            await googleLogOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-between">
            <Dropdown className="lang-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="me-2 d-flex align-items-center">
                    <i className="fal fa-language fs-3"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item className="active" href="#">O'zbekcha</Dropdown.Item>
                    <Dropdown.Item href="#">Русский</Dropdown.Item>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className='profil-box'>
                <div className='profil-names'>
                    <h5 className="user-name">Muhammad</h5>
                    <Link to="/" className="home-btn">Bosing saytga qaytish uchun</Link>
                </div>
                <Dropdown className="user-dropdown">
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="me-2 d-flex align-items-center">
                        <img
                            className='user-img'
                            src="images/user-img.png"
                            alt="User Image"
                        />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Link
                        onClick={() => showProfil(true)}
                            className='dropdown-item'
                            to="/student/videos"
                        >
                            <i className="fad fa-user"></i>
                            Profil
                        </Link>
                        <Link
                        onClick={() => showProfil(true)}
                            className='dropdown-item'
                            to="/teacher/class"
                        >
                            <i className="fad fa-user"></i>
                            Teacher
                        </Link>
                        <Dropdown.Item
                            onClick={handleGoogleLogOut}
                            href="#"
                        >
                            <i className="fal fa-sign-out-alt"></i>
                            Chiqish
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div >
    )
}

export default Profil