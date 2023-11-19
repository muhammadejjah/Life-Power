import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../components/Loading';
const Header = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    return (
        <Navbar expand="lg" className=' header w-100 ' fixed='top' style={{zIndex:"1000"}}   >

            <Container>
                <Link to="/">
                    <img
                        src={logo}
                        width="100"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Life Power logo"
                    />
                </Link>
                <Navbar.Toggle className='toggler-nav' aria-controls="basic-navbar-nav" onClick={() => { setOpen(false) }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-center justify-content-center gap-3 w-100 navs">
                        <NavLink onClick={()=>{setOpen(false)}} to={"/"} className={"nav"} end>Home</NavLink>
                        <li
                            className='nav products'
                            onClick={() => { setOpen(prev => !prev) }}
                        >Products</li>
                        <NavLink onClick={()=>{setOpen(false)}} to={"/about"} className={"nav"}>About Us</NavLink>
                        <NavDropdown className='nav' title="Catalogue" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><a className='nav' href='#'>Serial Number</a></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <a onClick={()=>{setOpen(false)}} className='nav' href='#'>2023 Catalogue</a>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink onClick={()=>{setOpen(false)}} to={"/contact"} className={"nav"}>Contact Us</NavLink>
                        <div
                            className='dropdoun-products'
                            style={{ display: open ? "block" : "none" }}
                        >
                        </div>
                    </Nav>
                    <div className='search'>
                        <input onClick={()=>{setOpen(false)}} value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='Search' className='search-input' type='text' />
                        <div style={{ display: search ? "block" : "none" }} className='search-dropdown'>
                            <Loading loading={true}></Loading>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
