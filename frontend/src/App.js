import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Login from './components/Login';
import AdminAbout from './adminComponents/AdminAbout';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import Alert from './components/Alert';
import { setLoadingAction, unsetLoadingAction } from './redux/actions';
// import './index.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [navStatus, setNavStatus] = useState(0)
  const [showAlert, setShowAlert]=useState(false)

  const dispatch = useDispatch()
  const alertState = useSelector((state)=>state.alertReducer)
  const loadingState = useSelector((state) => state.loadingReducer)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  useEffect(()=>{
    dispatch(setLoadingAction())
    setTimeout(() => {
      dispatch(unsetLoadingAction())
    }, 2000);
  }, [])
  useEffect(()=>{
    if(alertState.message.length>0){
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    }
  }, [alertState.message])
  return (
    <div className={`${isDarkMode ? "lightGray" : ""}`}>
      <Router>
        {loadingState && <Loading isDarkMode={isDarkMode} />}
        <Navbar navStatus={navStatus} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route exact path='/login' element={
            <>
              <Login isDarkMode={isDarkMode} setNavStatus={setNavStatus} />
            </>
          } />
          <Route exact path='/about' element={
            <>
              <AdminAbout isDarkMode={isDarkMode} setNavStatus={setNavStatus} />
            </>
          } />
          <Route exact path='/' element={
            <>
              <Hero isDarkMode={isDarkMode} setNavStatus={setNavStatus} />
              <About isDarkMode={isDarkMode} />
              <Skills isDarkMode={isDarkMode} />
              <div className="container">
                <Projects isDarkMode={isDarkMode} />
                <Resume isDarkMode={isDarkMode} />
              </div>
              <Contact isDarkMode={isDarkMode} />
            </>
          } />
        </Routes>
        {showAlert && <Alert key={showAlert} alertState={alertState} />}
        <div className={`horizontal_rule ${isDarkMode ? "pureBlack" : ""}`}>
          <hr />
        </div>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </div>
  );
}

export default App;
