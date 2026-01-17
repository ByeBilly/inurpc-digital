
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import BookDemo from './pages/BookDemo';
import Legal from './pages/Legal';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import MyProducts from './pages/MyProducts';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { ReviewProvider } from './context/ReviewContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ReviewProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/digital-products" element={<Store />} />
                <Route path="/digital-products/:slug" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-demo" element={<BookDemo />} />
                <Route path="/legal/:type" element={<Legal />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                
                {/* Protected Routes */}
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/my-products" 
                  element={
                    <ProtectedRoute>
                      <MyProducts />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <SiteFooter />
          </div>
        </Router>
      </ReviewProvider>
    </AuthProvider>
  );
};

export default App;
