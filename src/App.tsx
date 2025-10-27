import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={
          <div className="min-h-screen bg-white">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <BackToTop />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
