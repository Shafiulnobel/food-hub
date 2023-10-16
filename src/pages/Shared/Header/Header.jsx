import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo_main.png"
import { AuthContext } from '../../../providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to="/"><img className='img-fluid w-25' src={logo} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <ActiveLink className='decore' to={`/`}>Home</ActiveLink>
                        <ActiveLink className='decore' to={`/blog`}>Blog</ActiveLink>
                        <ActiveLink className='decore' to={`/About`}>About</ActiveLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {user ?
                        <>
                            <Button onClick={handleLogOut} variant='danger'>Logout</Button>
                            <Navbar.Text className='ms-2'>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </>
                        :
                        <Link to="/login">
                            <Button variant='dark'><Link className='text-white text-decoration-none' to="/login">Login</Link></Button>
                        </Link>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;