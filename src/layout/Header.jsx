import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas } from 'react-bootstrap';

const Header = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const data = [
        {
            cat: "battery", id: 1, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "inv", id: 2, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 3, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "good thinks", id: 4, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 5, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 6, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 7, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 8, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 9, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 10, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id:11, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
        {
            cat: "solar", id: 12, subCat: [
                { description: "lithium", id: 1, title: "mbt" },
                { description: "gel", id: 2, title: "rct" },
                { description: "led-asid", id: 3, title: "fck" },
            ]
        },
    ];
    const showData = data.map((el, idx) => {
        return (
            <div className='dropdown-section' key={el.id} >
                <h4 className='mb-2 main-color'>{el.cat}</h4>
                <div className='d-flex flex-column dropdown-link'>
                    {el.subCat.map((el, idx) => {
                        return (
                            <Link className='dropdown-link my-1 p-1' onClick={() => { setOpen(false) }} key={idx} to={`/products/${el.id}`}>
                                <p className='m-0'>{el.description}</p>
                                <p className='m-0'>{el.title}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    })


    return (
        <Navbar collapseOnSelect expand="lg" className=' header w-100 shadow' fixed='top' style={{ zIndex: "1000" }}   >
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
                <Navbar.Toggle className='toggler-nav' aria-controls="offcanvasNavbar-expand-lg" onClick={() => { setOpen(false) }} />
                <Navbar.Offcanvas
                    
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header color='red' closeButton>
                        <Offcanvas.Title className='main-color' id={`offcanvasNavbarLabel-expand-lg`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav className="d-flex align-items-center justify-content-center gap-3  navs">
                        <NavLink onClick={() => { setOpen(false) }} to={"/"} className={"nav"} end>Home</NavLink>
                        <li
                            className='nav products'
                            onClick={() => { setOpen(prev => !prev) }}
                        >Products</li>
                        <NavLink onClick={() => { setOpen(false) }} to={"/about"} className={"nav"}>About Us</NavLink>
                        <NavDropdown className='nav' title="Catalogue" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"><a className='nav' href='#'>Serial Number</a></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <a onClick={() => { setOpen(false) }} className='nav' href='#'>2023 Catalogue</a>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink onClick={() => { setOpen(false) }} to={"/contact"} className={"nav"}>Contact Us</NavLink>
                        <div
                            className='dropdown-products'
                            style={{ display: open ? "block" : "none" }}
                        >
                            <div className='dropdown-content'>
                                {showData}
                            </div>
                        </div>
                        <div className='search d-flex align-items-center justify-content-center ms-lg-5'>
                            <input
                                onClick={() => { setOpen(false) }}
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }}
                                placeholder='Search'
                                className='search-input'
                                type='text'
                            />
                            {search&&<FontAwesomeIcon
                                className='xmark-search'
                                icon={faXmark}
                                onClick={() => { setSearch("") }}
                            />}
                            <div style={{ display: search ? "block" : "none" }} className='search-dropdown'>
                                <div><Loading loading={true}></Loading></div>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header
