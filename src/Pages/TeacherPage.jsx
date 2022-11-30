import React from 'react'
import HeaderTitle from '../components/Header/HeaderTitle'
import styled, { css } from 'styled-components'
import TablePaginationComponent from '../components/TablePaginationComponent'
import HeaderNavbar from '../components/Navbar/HeaderNavbar'
import { Container } from 'react-bootstrap'
import { UserAuth } from '../context/AuthContext'

export const SearchForm = styled.form`
    position: relative;
`

export const SearchFormInput = styled.input`
    width: 100%;
    padding: 15px 55px 15px 30px;
    border: 1px solid #E4E4E7;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    outline: none;
`

export const SearchFormBtn = styled.button`
    height: 56px;
    padding: 0 30px 0 0;
    background: #fff;
    font-size: 21px;
    color: #242430;
    border: 1px solid #E4E4E7;
    border-left: none;
    backdrop-filter: blur(10px);
    border-radius: 0 10px 10px 0;
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
`;

function TeacherPage() {
    const { payHistory } = UserAuth()
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={'Классы'} />
                <div className="videos-boxes px-0">
                    <div className='shadow-box mb-50' >
                        <SearchForm>
                            <SearchFormInput placeholder='Поиск' />
                            <SearchFormBtn>
                                <i className="fad fa-search"></i>
                            </SearchFormBtn>
                        </SearchForm>
                    </div>

                    <TablePaginationComponent tableData={payHistory} />
                </div>
            </Container>
        </div>
    )
}

export default TeacherPage