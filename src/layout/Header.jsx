import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Fragment, useEffect, useRef, useState } from 'react';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Offcanvas, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData } from '../state/HomeSlice';
import Accordion from 'react-bootstrap/Accordion'
import { getSearch } from '../state/SearchSlice';
import { BaseURL } from '../Api/Api';
import { setSearchTittle } from '../state/SearchSlice';
const Header = () => {
    const dispatch = useDispatch()
    const { searchListShow, searchList, loading, error } = useSelector(state => state.SearchSlice)
    const { categories } = useSelector(state => state.HomeSlice)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const dropdown = useRef(null)
    const productNav = useRef(null)
    const [term, setTerm] = useState("")
    useEffect(() => {
        if (term) {
            dispatch(getSearch(term))
            dispatch(setSearchTittle(term))
        }
    }, [term])

    const closeAfterSearch = () => {
        setTerm("")
        handleClose()
    }
    const searchResult = searchListShow.map((el, idx) => {
        return (
            <div key={el.id} className=' w-100 px-4 search-result d-flex  align-items-center justify-content-center'>
                <Link
                    to={`/product/${el.id}`}
                    className='d-flex flex-row align-items-center justify-content-between  w-100 '
                    onClick={closeAfterSearch}
                >
                    <img src={`${BaseURL}${el.thumbnail}`} alt='search-result' style={{ width: "30px", objectFit: "contain" }} />
                    <p className='m-0'>{el.name}</p>
                </Link>
            </div>
        )
    })
    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(!menuOpen)
        }
    }
    const handleClose = () => setMenuOpen(false)
    useEffect(() => {
        const handleClick = (event) => {
            if (dropdown.current && !dropdown.current.contains(event.target) && !productNav.current.contains(event.target)) {
                setOpen(false)
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [])


    useEffect(() => {
        dispatch(getHomeData())
    }, [dispatch])


    const accordionDropdown = categories.map((el, idx) => {
        return (
            <Accordion key={el.id}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{el.name}</Accordion.Header>
                    <Accordion.Body>
                        {el.subcategories.map((element, i) => {
                            return (
                                <Link className='dropdown-link ' onClick={() => { setOpen(false) }} key={i} to={`/products/${element.id}`}>
                                    <p style={{ fontSize: "16px", fontWeight: "500", opacity: "80%" }} className='m-0 main-color'>{element.title}</p>
                                    <p style={{ fontSize: "13px" }} className='m-0 main-color-opacity'>{element.subtitle}</p>
                                </Link>
                            )
                        })}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
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
                <Navbar.Toggle
                    className='toggler-nav'
                    aria-controls="offcanvasNavbar-expand-lg"
                    onClick={() => { setMenuOpen(prev => !prev) }}
                />
                <Navbar.Offcanvas
                    show={menuOpen}
                    onHide={handleClose}
                    restoreFocus={false}
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                >
                    <Offcanvas.Header color='red' closeButton >
                        <Offcanvas.Title className='main-color' id={`offcanvasNavbarLabel-expand-lg`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav className="d-flex align-items-center justify-content-between  navs ">
                        <div className='d-flex  flex-column gap-2 gap-lg-4 text-center flex-lg-row align-items-center justify-content-center w-100'>
                            <NavLink
                                to={"/"}
                                className={"nav "}
                                onClick={toggleMenu}
                                end
                            >
                                Home
                            </NavLink>
                            <li
                                className='nav products'
                                onClick={() => { setOpen(prev => !prev) }}
                                ref={productNav}
                            >
                                Products
                            </li>
                            <NavLink
                                to={"/about"}
                                className={"nav"}
                                onClick={toggleMenu}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to={"/contact"}
                                className={"nav"}
                                onClick={toggleMenu}
                            >Contact Us</NavLink>
                        </div>
                        <div
                            className='dropdown-products shadow'
                            style={{ display: open ? "block" : "none" }}
                            ref={dropdown}
                        >
                            <div
                                className='dropdown-content'
                            >
                                {accordionDropdown}
                            </div>
                        </div>
                        <div className='search d-flex align-items-center justify-content-center   '>
                            <input
                                value={term}
                                onChange={(e) => { setTerm(e.target.value) }}
                                placeholder='Search...'
                                className='search-input ms-auto '
                                type='text'
                            />
                            {term && <FontAwesomeIcon
                                className='xmark-search'
                                icon={faXmark}
                                onClick={() => { setTerm("") }}
                            />}
                            <div style={{ display: term ? "block" : "none" }} className='search-dropdown'>
                                <Loading loading={loading}>
                                    {error ?
                                        <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
                                            <p className='primery-color'>No Product Found</p>
                                        </div> :
                                        <Fragment>
                                            {searchResult}
                                            {searchList.length > 3 &&
                                                <div className='see-more'>
                                                    <Link
                                                        to={`/search/${term}`}
                                                        className='w-100 text-center'
                                                        onClick={closeAfterSearch}
                                                    >
                                                        See More...
                                                    </Link>
                                                </div>}
                                        </Fragment>

                                    }
                                </Loading>
                            </div>
                        </div>
                    </Nav>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header
