import { Header } from '@/components/shared'
import '../globals.css'
import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { AOS } from '@/components/helpers';
import { GET } from '../api/auth/[...nextauth]/route';
import { Provider } from '@/lib/Provider';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Choose My Power | Admin',
  description: 'Your personal reliable power broker',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(GET)
  // @ts-ignore
  if(!session?.user) redirect("/login")

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body >

      <Provider>

        <AOS/>
        <Theme accentColor="blue" grayColor="sand" radius="large" scaling="95%">
  
        <div>
          <Header/>
        </div>  

        <div className='bg-bg pt-16 min-h-[100vh]'>
          {children}
        </div>

      </Theme>
      </Provider>
      </body>
    </html>
  )
}