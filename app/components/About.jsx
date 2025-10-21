import { assets, skills, tools } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';



const About = () => {
    const { t } = useTranslation('common');
    const experience = new Date().getFullYear() - 2020;

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id='about' className='h-screen flex flex-col items-center w-full px-[12%] py-15 scroll-mt-10 md:scroll-mt-30'>
        <motion.h3 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg text-light-text dark:text-dark-text'>{t('about_sub_title')}</motion.h3>
        <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='text-center text-5xl text-light-text dark:text-dark-text'>{t('about_title')}</motion.h2>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex w-full flex-col items-center gap-20 my-10'>
         
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='items-center text-center'>
                <p className='mb-10 max-w-3xl text-light-text dark:text-dark-text'>
                    <Trans values={{ years: experience }}>{ t('about_description')}</Trans>
                </p>
               
                <motion.ul 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className='flex flex-wrap items-center justify-center max-w-3xl mb-5 gap-2 sm:gap-5'>
                    {skills.map((skill, index) =>(
                        <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className='cursor-pointer hover:-translate-y-1 duration-500' 
                            key={index}>
                            <Image src={skill} alt='tool' className='w-10 sm:w-13 md:w-18' />
                        </motion.li>
                    ))}
                </motion.ul>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About