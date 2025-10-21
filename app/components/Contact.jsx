import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    
    const { t } = useTranslation('common');

    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult(t('contact_form_result_sending'));
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f76b4e66-c7de-4ab8-a5c3-c3da60b1d9fb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };  

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }} 
      id='contact' className='w-full px-[12%] py-15 scroll-mt-15 md:scroll-mt-20'>

        <motion.h3 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }} 
          className='text-center mb-2 text-lg text-light-text dark:text-dark-text'>
          {t('contact_sub_title')}
        </motion.h3>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
          className='text-center text-5xl text-light-text dark:text-dark-text'>
          {t('contact_title')}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }} 
          className='text-center max-w-2xl mx-auto mt-5 mb-12 text-light-text dark:text-dark-text'>
            {t('contact_description')}
        </motion.p>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }} 
          onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-3 mt-10 mb-8'>
                <motion.input 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }} 
                  className='flex-1 p-3 outline-none border-[0.5px] text-xs sm:text-sm md:text-lg border-light-text rounded-md bg-light-theme dark:bg-dark-theme dark:border-dark-text placeholder-light-text dark:placeholder-dark-text text-light-text dark:text-dark-text' 
                  type='text' placeholder={t('contact_input_name')}  required name='name'/>

                <motion.input 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }} 
                  className='flex-1 p-3 outline-none border-[0.5px] text-xs sm:text-sm md:text-lg border-light-text rounded-md bg-light-theme dark:bg-dark-theme dark:border-dark-text placeholder-light-text dark:placeholder-dark-text text-light-text dark:text-dark-text' 
                  type='email' placeholder={t('contact_input_email')}  required name='email'/>
            </div>

            <motion.textarea 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }} 
              className='w-full p-4 outline-none border-[0.5px] text-xs sm:text-sm md:text-lg border-light-text rounded-md bg-light-theme mb-6 dark:bg-dark-theme dark:border-dark-text placeholder-light-text dark:placeholder-dark-text text-light-text dark:text-dark-text'
              rows={6} placeholder={t('contact_input_text')} required name='message'></motion.textarea>
            
            <motion.button 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 1.6 }} 
              className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-dark-text rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover'
              type='submit'>
                {t('contact_btn')}
              <Image src={assets.right_arrow_light} alt='' className='w-6' /></motion.button>

            <p className='mt-5'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact