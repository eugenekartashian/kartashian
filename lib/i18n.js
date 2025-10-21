import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    common: {
      nav_logo_name: 'Eugene Kartashian',
      nav_home: 'Home',
      nav_about: 'About me',
      nav_work: 'My work',
      nav_contact: 'Contact me',
      nav_contact_btn: 'Contact',

      header_name: 'Eugene Kartashian',
      header_title: 'Frontend Developer',
      header_contact: 'Contact me',
      header_cv: 'My CV',

      about_sub_title: 'Introduction',
      about_title: 'About me',
      about_description:
        'Detail-oriented and creative <strong>Frontend Web Developer</strong> with <strong> {{ years }} years of experience</strong>, passionate about building <strong>fast, responsive</strong>, and <strong>user-friendly</strong> web applications with <strong>HTML, CSS, JavaScript, React.js, Next.js</strong> and <strong>Tailwind CSS.</strong> Focused on <strong>performance optimization, intuitive UI/UX</strong> and <strong>scalable code</strong> to enhance user engagement and business growth.',

      work_sub_title: 'My portfolio',
      work_title: 'Some of my work',
      work_description:
        "I've worked under an NDA for the past five years, but here are some of my pet projects.",
      work_btn: 'Show more',

      contact_sub_title: 'Connect with me',
      contact_title: 'Get in touch',
      contact_description:
        "I'd love to hear from you! If you have any questions, comments or feedback — please use the form below:",
      contact_input_name: 'Enter your name',
      contact_input_email: 'Enter your email',
      contact_input_text: 'Enter your message',
      contact_btn: 'Submit now',
      contact_form_result: 'Sending...',

      footer_name: 'Eugene Kartashian'
    }
  },
  es: {
    common: {
      nav_logo_name: 'Eugenio Kartashian',
      nav_home: 'Inicio',
      nav_about: 'Sobre mí',
      nav_work: 'Mi trabajo',
      nav_contact: 'Contáctame',
      nav_contact_btn: 'Contacto',

      header_name: 'Eugenio Kartashian',
      header_title: 'Desarrollador Frontend',
      header_contact: 'Contáctame',
      header_cv: 'Mi CV',

      about_sub_title: 'Introduction',
      about_title: 'Sobre mí',
      about_description:
        'Desarrollador Web Frontend <strong>detallista y creativo</strong> con <strong> {{ years }} años de experiencia</strong>, apasionado por construir aplicaciones web <strong>rápidas, responsivas</strong> y <strong>fáciles de usar</strong> con <strong>HTML, CSS, JavaScript, React.js, Next.js</strong> y <strong>Tailwind CSS.</strong> Enfocado en <strong>optimización del rendimiento, UI/UX intuitivo</strong> y <strong>código escalable</strong> para mejorar la interacción del usuario y el crecimiento empresarial.',

      work_sub_title: 'Mi portafolio',
      work_title: 'Algunos de mis trabajos',
      work_description:
        'He trabajado bajo un NDA durante los últimos cinco años, pero aquí les muestro algunos de mis proyectos personales.',
      work_btn: 'Mostrar más',

      contact_sub_title: 'Conéctate conmigo',
      contact_title: 'Ponte en contacto',
      contact_description:
        '¡Me encantaría saber de ti! Si tienes alguna pregunta, comentario o sugerencia, por favor usa el formulario de abajo:',
      contact_input_name: 'Ingrese su nombre',
      contact_input_email: 'Ingrese su correo',
      contact_input_text: 'Ingrese su mensaje',
      contact_btn: 'Enviar ahora',
      contact_form_result: 'Enviando...',

      footer_name: 'Eugenio Kartashian'
    }
  },
  ua: {
    common: {
      nav_logo_name: 'Євген Карташян',
      nav_home: 'Головна',
      nav_about: 'Про мене',
      nav_work: 'Моя робота',
      nav_contact: "Зв'язатися зі мною",
      nav_contact_btn: "Зв'язатися",

      header_name: 'Євген Карташян',
      header_title: 'Frontend Розробник',
      header_contact: "Зв'язатися зі мною",
      header_cv: 'Моє Резюме',

      about_sub_title: 'Вступ',
      about_title: 'Про мене',
      about_description:
        '<strong>Детально орієнтований і креативний</strong> Frontend Web Developer із <strong> {{ years }} роками досвіду</strong>, захоплений створенням <strong>швидких, адаптивних</strong> і <strong>зручних</strong> веб-додатків за допомогою <strong>HTML, CSS, JavaScript, React.js, Next.js</strong> та <strong>Tailwind CSS.</strong> Зосереджений на <strong>оптимізації продуктивності, інтуїтивному UI/UX</strong> і <strong>масштабованому коді</strong> для покращення взаємодії з користувачами та розвитку бізнесу.',

      work_sub_title: 'Моє портфоліо',
      work_title: 'Деякі з моїх робіт',
      work_description:
        "Я працював під NDA протягом останніх п'яти років, але ось кілька моїх пет-проектів.",
      work_btn: 'Показати більше',

      contact_sub_title: "Зв'яжіться зі мною ",
      contact_title: "Будьте на зв'язку",
      contact_description:
        'Я буду радий почути вас! Якщо у вас є запитання, коментарі або відгуки — скористайтеся формою нижче:',
      contact_input_name: "Введіть своє ім'я",
      contact_input_email: 'Введіть свою пошту',
      contact_input_text: 'Введіть своє повідомлення',
      contact_btn: 'Надіслати зараз',
      contact_form_result: 'Надсилання...',

      footer_name: 'Євген Карташян'
    }
  },
  ru: {
    common: {
      nav_logo_name: 'Евгений Карташян',
      nav_home: 'Главная',
      nav_about: 'Обо мне',
      nav_work: 'Моя работа',
      nav_contact: 'Связаться со мной',
      nav_contact_btn: 'Связаться',

      header_name: 'Евгений Карташян',
      header_title: 'Frontend Разработчик',
      header_contact: 'Связаться со мной',
      header_cv: 'Моё Резюме',

      about_sub_title: 'Введение',
      about_title: 'Обо мне',
      about_description:
        '<strong>Внимательный к деталям и креативный</strong> Frontend Web Developer с <strong> {{ years }} годами опыта</strong>, увлечён созданием <strong>быстрых, адаптивных</strong> и <strong>удобных</strong> веб-приложений с использованием <strong>HTML, CSS, JavaScript, React.js, Next.js</strong> и <strong>Tailwind CSS.</strong> Сфокусирован на <strong>оптимизации производительности, интуитивном UI/UX</strong> и <strong>масштабируемом коде</strong> для повышения вовлечённости пользователей и роста бизнеса.',

      work_sub_title: 'Моё портфолио',
      work_title: 'Некоторые из моих работ',
      work_description:
        'Я работал под NDA последние пять лет, но вот некоторые из моих пет-проектов.',
      work_btn: 'Показать больше',

      contact_sub_title: 'Свяжитесь со мной',
      contact_title: 'Будьте на связи',
      contact_description:
        'Буду рад услышать вас! Если у вас есть вопросы, комментарии или отзывы — пожалуйста, используйте форму ниже:',
      contact_input_name: 'Введите ваше имя',
      contact_input_email: 'Введите вашу почту',
      contact_input_text: 'Введите ваше сообщение',
      contact_btn: 'Отправить сейчас',
      contact_form_result: 'Отправка...',

      footer_name: 'Евгений Карташян'
    }
  }
};

// for server render
// i18n.use(initReactI18next).init({
//   resources,
//   lng: localStorage.getItem("language") || "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

const browserLang =
  typeof window !== 'undefined' ? navigator.language.split('-')[0] : 'en';
const defaultLang = ['en', 'es', 'ua', 'ru'].includes(browserLang)
  ? browserLang
  : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export const changeLanguage = (locale) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', locale);
  }
  i18n.changeLanguage(locale);
};

export default i18n;
