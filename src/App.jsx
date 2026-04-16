import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import { products } from './data/products';
import { AuthProvider } from './context/AuthContext';

function Home() {
  return (
    <>
      <Hero />
      <ProductGrid products={products} />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div id="home" className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
