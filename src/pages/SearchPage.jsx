import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardsContainer from '../components/Sub Categories Page/CardsContainer'
import { getSearch } from '../state/SearchSlice'
import { useParams } from 'react-router-dom'
const SearchPage = () => {
    const { search } = useParams()
    const dispatch = useDispatch()
    const { searchList, searchTitle, loading, error } = useSelector(state => state.SearchSlice)
    const [term, setTerm] = useState(searchTitle)
    useEffect(() => {
        dispatch(getSearch(search))
    }, [search])
    const hanldeSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearch(term))
    }
    return (
        <Container style={{ marginTop: "75px" }}>
            <form className='center' onSubmit={hanldeSubmit}>
                <input
                    placeholder='Search...'
                    value={term} type='text'
                    className='search-page-input '
                    style={{ width: "70%" }}
                    onChange={(e) => { setTerm(e.target.value) }}
                />
                <button type='submit' className=' search-btn'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <div>
                <p className='main-color text-center my-4'>{`(${searchList.length}) search results`}</p>
            </div>
            {error ?
                <div className='center' style={{minHeight:"50vh"}}>
                    <p className='primery-color'>No Product found
                    </p>
                </div> :
                <CardsContainer loading={loading} data={searchList} role={"search"} />
            }
        </Container>
    )
}

export default SearchPage
