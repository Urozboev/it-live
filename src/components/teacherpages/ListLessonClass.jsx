import React from 'react'
import HeaderTitle from '../Header/HeaderTitle'
import { PrevLink } from '../studentpages/VideoBox'
import styled from 'styled-components'
import { MyButton } from '../studentpages/Homework'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const AddLessonWindow = styled.div`
    max-width: 540px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 15px;
    transform: translate(0, -50%);
`;

function ListLessonClass() {
    const navigate = useNavigate()
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={'1-А'} />
                <div className="videos-boxes px-0">
                    <PrevLink />
                    <AddLessonWindow className='shadow-box' >
                        <h3 className="shop-box-title">
                            Добавить урок
                        </h3>
                        <MyButton bg='#E3445A' color='#fff'>
                            <i className="fas fa-plus"></i>
                        </MyButton>
                    </AddLessonWindow>
                    <div className='shadow-box d-flex align-items-center justify-content-between' >
                        <h4 className='m-0 fw-bold'>1-DARS</h4>
                        <p className='task-item-text m-0 ms-5 me-auto'>Java Backend</p>
                        <MyButton
                            onClick={() => navigate('/teacher/class/1-A/add-lesson')}
                        >
                            Подробнее
                        </MyButton>
                    </div>
                    <div className='shadow-box d-flex align-items-center justify-content-between' >
                        <h4 className='m-0 fw-bold'>1-DARS</h4>
                        <p className='task-item-text m-0 ms-5 me-auto'>Java Backend</p>
                        <MyButton
                            onClick={() => navigate('/teacher/class/:1-A/add-lesson')}
                        >
                            Подробнее
                        </MyButton>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ListLessonClass