'use client';

import './globals.css'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import "@/lib/i18n"; 


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(null); 
  
  const getPreferredTheme = () => {
    if (typeof window === 'undefined') return null; 

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  };
  
  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setIsDarkMode(preferredTheme); 
  }, []);
  

  useEffect(() => {
    if (isDarkMode === null) return; 
    const applyTheme = (dark) => {
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(event.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={toggleTheme} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
