// import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  
  const { t } = useTranslation('common');

  return (
    <>
    <div className='text-center flex items-center justify-center border-t border-light-text dark:border-dark-text mx-[10%] mt-8 py-6 text-light-text dark:text-dark-text'>
        <p>© <span>{new Date().getFullYear()}</span> {t('footer_name')}.</p>
        {/* <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href='mailto:e.kartashian@gmail.com'>e.kartashian@gmail.com</a></li>
            <li><a target='_blank' href='https://github.com/eugenekartashian'>GitHub</a></li>
            <li><a target='_blank' href='https://www.linkedin.com/in/yevhen-kartashian/'>LinkedIn</a></li>
        </ul> */}
    </div>
    </>
  )
}

export default Footer