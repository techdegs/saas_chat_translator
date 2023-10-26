import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import {MessagesSquareIcon} from 'lucide-react'
import Link from 'next/link'

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session)

  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='flex flex-col sm:flex-row items-center bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />

        <div className='flex-1 flex items-center justify-end space-x-4'>
          {/* language selector */}


          {/* session && */}
          {
            session ? (
              <>
                <Link href="/chat" prefetch={false}><MessagesSquareIcon /></Link>
              </>
            ):(
              <>
                <Link prefetch={false} href={"/pricing"}>Pricing</Link>
              </>
            )
          }

          {/* dark mode toggle */}
          <DarkModeToggle />
          
          {/* user button */}
          <UserButton session={session} />
        </div>
      </nav>
      {/* upgrade banner */}
    </header>
  )
}

export default Header