import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import HeaderNavbar from './components/Navbar/HeaderNavbar'
import OnlineCourses from './Pages/OnlineCourses';
import OfflineCourses from './Pages/OfflineCourses';
import HomePages from './Pages/HomePages';
import ErrorPage from './Pages/ErrorPage';
import ContactPage from './Pages/ContactPage';
import Footer from './components/Sections/Footer';
import TeacherPage from './Pages/TeacherPage';
import { useState } from 'react';
import StudentPage from './Pages/StudentPage';
import MyLesson from './components/studentpages/MyLesson';
import SelectedCourse from './components/studentpages/SelectedCourse';
import Homework from './components/studentpages/Homework';
import TestPage from './components/studentpages/TestPage';
import Cabinet from './components/studentpages/Cabinet';
import Feedback from './components/studentpages/Feedback';
import ListLessonClass from './components/teacherpages/ListLessonClass';
import AddLessonClass from './components/teacherpages/AddLessonClass';
import MyStudents from './components/teacherpages/MyStudents';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import { useEffect } from 'react';
import HomeTasks from './components/teacherpages/HomeTasks';

const navText = {
  home: [
    { id: 0, pathname: '/', text: 'Bosh sahifa' },
    { id: 1, pathname: '/online', text: 'Online' },
    { id: 2, pathname: '/offline', text: 'Offline' },
    { id: 3, pathname: '/contact', text: 'Contact' },
  ],
  student: [
    { id: 0, pathname: '/student/videos', text: 'Video darslarim' },
    { id: 1, pathname: '/student/my-lesson', text: 'Mening darslarim' },
    { id: 2, pathname: '/student/cabinet', text: 'Shaxsiy kabinet' },
    { id: 3, pathname: '/student/feedback', text: 'Baholash' },
  ],
  teacher: [
    { id: 0, pathname: '/teacher/class', text: 'Классы' },
    { id: 1, pathname: '/teacher/my-students', text: 'Ученики' },
    { id: 2, pathname: '/teacher/hometasks', text: 'Домашние задания' },
  ]
}

function App() {
  const location = useLocation();
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false);
  const [locationName, setLocationName] = useState({
    data: navText.home
  })
  const locationPathname = location.pathname.split('/')
  useEffect(() => {
    window.localStorage.setItem('auth', auth);
    if (window.localStorage.getItem('auth') === 'false') {
      navigate('/')
    }
  }, [auth])
  useEffect(() => {
    if (window.localStorage.getItem('auth') === 'true' && locationPathname[1] === 'teacher') {
      setLocationName({ data: navText.teacher });
    } else if (window.localStorage.getItem('auth') === 'true' && locationPathname[1] === 'student') {
      setLocationName({ data: navText.student });
    } else {
      setLocationName({ data: navText.home })
    }
  }, [locationPathname[1]]);

  useEffect(() => {
    return () => {
      setAuth(false)
    }
  }, [])

  const showProfil = (val) => {
    setAuth(val)
  }

  const { courseName } = useParams()

  return (
    <AuthContextProvider showProfil={showProfil}>
      <HeaderNavbar navText={locationName.data} showProfil={showProfil} />
      <Routes>
        <Route path='/' index element={<HomePages />} />
        <Route path='/online' element={<OnlineCourses />} />
        <Route path='/offline' element={<OfflineCourses />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/student/:videos' element={<StudentPage auth={auth} showProfil={showProfil} />} />
        <Route path='/student/:videos/:courseName' element={<SelectedCourse />} />
        <Route path='/student/:my-lesson' element={<MyLesson />} />
        <Route path='/student/:my-lesson/:lessonName' element={<SelectedCourse />} />
        <Route path='/student/:my-lesson/:lessonName/:lessonID' element={<Homework />} />
        <Route path='/student/:my-lesson/:lessonName/:lessonID/test' element={<TestPage />} />
        <Route path='/student/cabinet' element={<Cabinet />} />
        <Route path='/student/feedback' element={<Feedback />} />
        <Route path='/teacher/class' element={<TeacherPage auth={auth} showProfil={showProfil} />} />
        <Route path='/teacher/class/:1-A/lesson-list' element={<ListLessonClass />} />
        <Route path='/teacher/class/:1-A/add-lesson' element={<AddLessonClass />} />
        <Route path='/teacher/my-students' element={<MyStudents />} />
        <Route path='/teacher/my-students/:fullname' element={<Cabinet />} />
        <Route path='/teacher/hometasks' element={<HomeTasks />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
