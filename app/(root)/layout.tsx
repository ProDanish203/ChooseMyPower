import { Footer, Header } from '@/components/shared'
import '../globals.css'
import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { AOS } from '@/components/helpers';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Choose My Power',
  description: 'Your personal reliable power broker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body >

        <ToastContainer/>
          <AOS/>
        <Theme accentColor="blue" grayColor="sand" radius="large" scaling="95%">
    
          <div>
            <Header/>
          </div>  

          <div className='bg-bg pt-16 min-h-[100vh]'>
            {children}
          </div>
          
          <div>
            <Footer/>
          </div>
        </Theme>
        
      </body>
    </html>
  )
}
