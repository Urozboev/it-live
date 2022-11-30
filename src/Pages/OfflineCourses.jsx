import { Container } from "react-bootstrap"
import HeaderTitle from "../components/Header/HeaderTitle"
import Connect from "../components/Sections/Connect"
import Courses from "../components/Sections/Courses"
import Footer from "../components/Sections/Footer"
import TeamSlider from "../components/Sections/TeamSlider"

function OfflineCourses() {
  return (
    <div>
      <Container fluid>
        <HeaderTitle title={"Офлайн курсы"} />
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

    </div>
  )
}

export default OfflineCourses