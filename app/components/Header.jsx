import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const Header = ({ isDarkMode }) => {
  const { t } = useTranslation('common');

  return (
    <div className="h-screen w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 mb-2">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        <Image src={assets.profile_pic} alt="" className="rounded-full w-48" />
      </motion.div>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl sm:text-2xl lg:text-[2rem]  uppercase text-light-text dark:text-dark-text"
      >
        {t('header_name')}
      </motion.h2>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-4xl lg:text-[3rem] uppercase mb-2 text-light-text dark:text-dark-text"
      >
        {t('header_title')}
      </motion.h1>

      {/* <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='max-w-2xl mx-auto'>
            Detail orientated and creative Frontend Developer with expertise
            in markup and UI development, dedicated to crafting user-friendly
            and high-performance web applications. Skilled in designing and
            optimizing interactive pages to enhance user engagement and
            boost lead generation.
        </motion.p> */}

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex gap-3"
      >
        <a
          className="rounded-full shadow-sm cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent "
          href="https://www.linkedin.com/in/yevhen-kartashian/"
          target="_blank"
        >
          <Image className="w-6 sm:w-8 md:10" src={assets.linkedin} alt="" />
        </a>
        <a
          className="rounded-full shadow-sm cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent "
          href="https://github.com/eugenekartashian"
          target="_blank"
        >
          <Image className="w-6 sm:w-8 md:10" src={assets.github} alt="" />
        </a>
        <a
          className="rounded-full shadow-sm cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent"
          href="https://t.me/eugenekartashian"
          target="_blank"
        >
          <Image className="w-6 sm:w-8 md:10" src={assets.telegram} alt="" />
        </a>
        <a
          className="rounded-full shadow-sm cursor-pointer hover:-translate-y-1 duration-500 dark:bg-transparent "
          href="https://wa.me/+34624113850"
          target="_blank"
        >
          <Image className="w-6 sm:w-8 md:10" src={assets.whatsapp} alt="" />
        </a>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          href="#contact"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-light-text text-dark-text rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border dark:hover:bg-dark-hover"
        >
          {t('header_contact')}
          <Image src={assets.right_arrow_light} alt="" className="w-6" />
        </motion.a>

        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          href="/cv_eng_yevhen_kartashian.pdf?v=1.1"
          download
          className="px-10 py-3 border rounded-full flex items-center gap-2 bg-transparent text-light-text dark:text-dark-text hover:-translate-y-1 duration-500 hover:bg-light-hover dark:hover:bg-dark-hover"
        >
          {t('header_cv')}
          <Image
            src={isDarkMode ? assets.download_icon_light : assets.download_icon}
            alt=""
            className="w-5"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
