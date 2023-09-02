'use client'

import React from 'react'
import Link from 'next/link'

import Button from '@/components/common/button'

type NavProps = {
  url:string
  content:string
}

const NavItem: React.FC<NavProps> = ({ url, content }) => {
  return (
    <Link href={url}>
      <span className='underline-text'>{content}</span>
    </Link>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <nav className='flex flex-row absolute items-center justify-between px-3.5 md:px-6 lg:px-12 mt-12 w-full'>
        <p className='text-white'>logo</p>
        <div className='flex flex-row space-x-10'>
          <NavItem content='Proyecto' url='as' />
        </div>
        <Button content='Contactanos' onClick={() => console.log('contacto')} />
      </nav>
    </header>
  )
}

export default Header
