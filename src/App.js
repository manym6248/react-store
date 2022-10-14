
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './components/Fontawesome'
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth'
import { auth } from './firebase';
import { Provider } from 'react-redux'
import store from './redux/store';
import Main from './Main';
import Navbarr from './components/main/Navbarr';
import Footer from './components/main/Footer';
import Addproduct from './pages/Addproduct';
import Reserve from './pages/Reserve';
import AllBlogs from './pages/allBlogs/AllBlogs';
import Menu from './pages/Menuu';
import BlogPage from './pages/allBlogs/pages/BlogPage';
import AuthorPage from './pages/allBlogs/pages/AuthorPage';
import Login from './pages/Login';
import ScrollToTop from './components/share/ScrollToTop';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './components/cart/Cart';


function App() {


  const [scrollPosition, setScrollPosition] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate()
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    })

  }

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());


  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 130) {
      setScrollPosition(false)
    } else {
      setScrollPosition(true)

    }
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);




  return (
    <Provider store={store}>
      <div className="App">
        {localStorage.getItem(isAuth) ? <Login setIsAuth={setIsAuth} signUserOut={signUserOut} />
          : <>
            <ScrollToTop />
            <Navbarr  scrollPosition={scrollPosition} Size={windowSize.innerWidth} eventCart={handleShow} />
            <Offcanvas className="Offcanvas1 mb-5 pb-3" show={show} onHide={handleClose} placement="end" >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Cart />
              </Offcanvas.Body>
            </Offcanvas>
            <Routes>
              <Route path="/" element={<Main Size={windowSize.innerWidth} />} />
              <Route path="/addproduct" element={<Addproduct />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reserve" element={<Reserve />} />
              <Route path="/allBlogs" element={<AllBlogs />} />
              <Route path="/blogs/:slug" element={<BlogPage />} />
              <Route path="/authors/:slug" element={<AuthorPage />} />
            </Routes>
            <Footer Size={windowSize.innerWidth} eventCart={handleShow} />

          </>

        }

      </div>
    </Provider>
  );
}

export default App;
