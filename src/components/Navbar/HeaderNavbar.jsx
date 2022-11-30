import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContextProvider, UserAuth } from '../../context/AuthContext';
import Profil from './Profil'
import SignInUp from './SignInUp'

function HeaderNavbar({ navText, showProfil }) {
    let location = useLocation();
    const { user } = UserAuth()
    return (
        <Container fluid style={{ background: '#FAFAFA' }}>
            <Navbar expand="lg">
                <Container fluid className='px-0'>
                    <Link to="/" className='logo-brand'>
                        <img src="images/ITLive_Red_Logo.png" alt="Logo Image" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto header-navlist">
                            {navText.map(navLink => {
                                const locPathname = location.pathname.split('/');
                                const myPathname = navLink.pathname.split('/');
                                // return <Link key={navLink.id} className={location.pathname == navLink.pathname ? "nav-link active" : "nav-link"} to={navLink.pathname}>{navLink.text}</Link>
                                return <Link key={navLink.id} className={(locPathname[1] == myPathname[1] && locPathname[2] == myPathname[2]) ? "nav-link active" : "nav-link"} to={navLink.pathname}>{navLink.text}</Link>
                            })}
                        </Nav>
                        {user?.displayName ? <Profil /> : <SignInUp showProfil={showProfil} />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default HeaderNavbar