import {cn} from '../lib/utils'
import Image from 'next/image'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function UserAvatar({
  name,
  image, 
  className
}:{
  name?: string | null;
  image?: string | null;
  className?: string;
}) {
  return (
    <Avatar className={cn('bg-white text-black cursor-pointer', className)}>
      {image && (
        <Image
          src={image}
          alt={name || "User name"}
          width={40}
          height={40}
          className="rounded-full"
          referrerPolicy='no-referrer'
        />
      )}
      {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
      <AvatarFallback delayMs={1000} className='dark:bg-white dark:text-black text-lg'>
        {
          //if no image choose initials of name
          name ?.split(" ").map((n) => n[0]).join("")
        }
      </AvatarFallback>
    </Avatar>
  )
}
