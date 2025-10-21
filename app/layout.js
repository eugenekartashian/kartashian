import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata = {
  title: 'Frontend Web Developer - Eugene Kartashian',
  description: 'Made with NextJS + TailwindCSS'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} antialiased leading-8 overflow-x-hidden bg-light-theme dark:bg-dark-theme dark:text-light-text font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
