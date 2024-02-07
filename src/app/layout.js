import './globals.css';
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProviders from '@/providers/ThemeProviders';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProviders>
        <div className="container">
          <div className="wrapper"> 
          <Navbar/>
          {children} 
          <Footer/>
          </div>
  </div>
  </ThemeProviders>
  </ThemeContextProvider>
  </body>
    </html>
  )
}
