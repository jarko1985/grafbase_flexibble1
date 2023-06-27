import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';
//import {Session} from 'next-auth'
const NavBar = () => {
    const session = {};
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
                <Image src="/logo.svg" alt='logo image' width={115} height={43}/>
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link)=>(
                    <Link key={link.key} href={link.href}>{link.text}</Link>
                ))}
            </ul>
        </div>
        <div className='flexCenter gap-4'>
           {session ? (
            <>
            user Photo
            <Link href="/create-project">
            Share Work
            </Link>
            </>
           ):(<AuthProviders/>)}
        </div>
    </nav>
  )
}

export default NavBar;
