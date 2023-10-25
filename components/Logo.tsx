import LogoImage from "images/logos/logo.svg"
import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

function Logo() {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="w-56">
        <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
          <Image 
            priority
            src={LogoImage}
            alt="logo"
            className="dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo