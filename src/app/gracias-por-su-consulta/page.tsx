'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Redes from '@/components/common/redes'
import Button from '@/components/common/button'
import HeroTitle from '@/components/common/heroTitle'
import Logo from '@/components/common/logo'

import portadaImage from '../../../public/images/portada-casa-grande.jpg'
const Consulta = () => {
  const router = useRouter()
  const navigate = () => router.push('/')

  return (
    <>
      <div className='-z-10 fixed w-screen h-screen'>
        <Image
          fill
          priority
          alt='Dycsa - Gran balcon de departamento en Casa Grande Laplace, con vista al estadio Mario Alberto Kempes'
          className='object-cover object-center'
          placeholder='blur'
          quality={100}
          src={portadaImage}
        />
      </div>
      <div className='flex flex-col justify-center w-full h-screen bg-gradient-to-b from-[rgba(3,19,51,.7)] to-transparent'>
        <div className='flex flex-col items-center justify-center w-full space-y-8'>
          <Logo />
          <p className='text-white text-xl'>Su consulta fue enviada</p>
          <HeroTitle content='Gracias por tu contacto.' />
          <p className='text-white text-lg font-bold'>Seguinos en nuestras redes:</p>
          <Redes direction='row' space='x' spaceValue='8' />
          <Button content='Volver al Inicio' onClick={navigate} />
        </div>
      </div>
    </>
  )
}

export default Consulta
