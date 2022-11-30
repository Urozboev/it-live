import React from 'react'
import { Container } from 'react-bootstrap'
import { UserAuth } from '../../context/AuthContext'
import { SearchForm, SearchFormBtn, SearchFormInput } from '../../Pages/TeacherPage'
import HeaderTitle from '../Header/HeaderTitle'
import TablePaginationComponent from '../TablePaginationComponent'
import { TestAndClassNumbers } from './AddLessonClass'

function MyStudents() {
    const { payHistory } = UserAuth()
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={'Ученики'} />
                <div className="videos-boxes px-0">
                    <div className='shadow-box mb-50' >
                        <SearchForm className='mb-50'>
                            <SearchFormInput placeholder='Поиск' />
                            <SearchFormBtn>
                                <i className="fad fa-search"></i>
                            </SearchFormBtn>
                        </SearchForm>
                        <TestAndClassNumbers text={'Выберите класс:'} massiv={['Все', '1-A', '1-B', '1-C', '1-D', '2-A', '2-B', '2-C', '2-D']} />
                    </div>
                    <TablePaginationComponent tableElements="teacher-student" tableData={payHistory} />
                </div>

            </Container>
        </div>
    )
}

export default MyStudents