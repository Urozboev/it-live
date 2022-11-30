import { Container } from "react-bootstrap"
import HeaderTitle from "../components/Header/HeaderTitle"
import Comments from "../components/Sections/Comments"
import Connect from "../components/Sections/Connect"
import Courses from "../components/Sections/Courses"
import Footer from "../components/Sections/Footer"
import TeamSlider from "../components/Sections/TeamSlider"

function OnlineCourses() {
  return (
    <div>
      <Container fluid>
        <HeaderTitle title={"Онлайн курсы"} />
        <Courses />
      </Container>
      <section id="team-section">
        <Container fluid>
          <HeaderTitle title={"Наша команда наставников"} />
          <p className="home-description">
            Учебная программа, разработанная сильными экспертами
          </p>
          <TeamSlider />
        </Container>
      </section>

      <Connect />

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

export default OnlineCourses