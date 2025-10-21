'use client';

import { assets } from '@/assets/assets';
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';


const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { t } = useTranslation('common');

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if (scrollY > 20) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-light-theme bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20' : ''}`}>
            <a href='#top' className='text-xl hover:-translate-y-0.5 duration-500 text-light-text dark:text-dark-text'>
              {t("nav_logo_name")}
                {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt="logo"/> */}
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-light-theme shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                <li className='hover:-translate-y-0.5 duration-500 text-light-text dark:text-dark-text'><a href="#top">{t('nav_home')}</a></li>
                <li className='hover:-translate-y-0.5 duration-500 text-light-text dark:text-dark-text'><a href="#about">{t('nav_about')}</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li className='hover:-translate-y-0.5 duration-500 text-light-text dark:text-dark-text'><a href="#work">{t('nav_work')}</a></li>
                <li className='hover:-translate-y-0.5 duration-500 text-light-text dark:text-dark-text'><a href="#contact">{t('nav_contact')}</a></li>
            </ul>

            <div className='flex items-center gap-4'>

              <LangSwitcher />
            
              <button onClick={() => setIsDarkMode(prev => !prev)} className='hover:-translate-y-0.5 duration-500'>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer' />
              </button>

              <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-light-text rounded-full ml-4 dark:border-white/50 hover:bg-light-hover dark:hover:bg-dark-hover duration-500 text-light-text dark:text-dark-text'>{t('nav_contact_btn')} 
              <Image src={isDarkMode ? assets.arrow_up_icon_dark : assets.arrow_up_icon} className='w-5' alt="contact"/></a>

              <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_light : assets.menu_dark} alt='' className='w-8' />
              </button>
            </div>

            {/* mobile menu */}

            <ul  ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#a57865] transition duration-500 text-dark-text dark:bg-dark-hover dark:text-dark-text'>

              <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_light} alt='' className='w-8 cursor-pointer' />
              </div>

              <li><a onClick={closeMenu} href="#top">{t('nav_home')}</a></li>
              <li><a onClick={closeMenu} href="#about">{t('nav_about')}</a></li>
              {/* <li><a onClick={closeMenu} href="#services">Services</a></li> */}
              <li><a onClick={closeMenu} href="#work">{t('nav_work')}</a></li>
              <li><a onClick={closeMenu} href="#contact">{t('nav_contact')}</a></li>
            </ul>

            
        </nav>
    </>
  )
}

export default Navbar