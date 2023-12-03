import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <div className='h-fit w-fit'>
      <Link href='https://dycsa.com.ar/' target='_blank'>
        <Image alt='Dycsa - Desarrolla, Comercializa y Entrega' height={50} src='/logo/dycsa-logo.svg' style={{ width: 100, height: 50 }} width={100} />
      </Link>
    </div>
  )
}

export default Logo
