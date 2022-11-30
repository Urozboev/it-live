import { Container } from 'react-bootstrap'
import HeaderTitle from '../Header/HeaderTitle'
import Comments from '../Sections/Comments'
import { BoxTitle, MyButton } from './Homework'


function QuestionBox() {
    return (
        <div className='shadow-box'>
            <div className="col-12">
                <BoxTitle margin='0 0 30px 0'>
                    O'qituvchiga savol berish
                </BoxTitle>
                <form action="" className="my-modal-form">
                    <div className="my-form-group">
                        <textarea id='input-password' className="my-form-input" cols="30" rows="10" placeholder='Отзыв'></textarea>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        <h6 className='feedback-stars'>
                            Оцените нас:
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </h6>
                        <MyButton bg='#E3445A' className='px-5 py-3'>Отправить</MyButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

function Feedback() {
    return (
        <div>
            <Container fluid>
                <HeaderTitle title={"Оставить отзыв"} />
                <div className="videos-boxes">
                    <QuestionBox />
                </div>
            </Container>
            <section id="comments-section">
                <Container fluid >
                    <h6 className="section-title">
                        Отзывы
                    </h6>
                    <h4 className="home-section-title">
                        Отзывы наших учеников
                    </h4>
                    <div className="row overflow-hidden">
                        <div className="col-12">
                            <Comments />
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Feedback