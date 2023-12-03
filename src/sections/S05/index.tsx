'use client'

import React from 'react'
import Link from 'next/link'

import Section from '@/components/common/section'
import VisibleContainer from '@/components/container/visibleContainer'
import Button from '@/components/common/button'

const SectionCinco: React.FC = () => {
  return (
    <Section>
      <VisibleContainer>
        <div className='bg-primary-100 shadow-xl rounded-xl w-full h-full flex justify-center'>
          <div className='p-6 flex flex-col w-full lg:max-w-3xl items-center justify-center space-y-6 min-h-[300px] lg:min-h-[350px] xl:min-h-[450px] xl:space-y-10'>
            <h2 className='text-white text-2xl lg:text-3xl text-center'>Te esperamos en nuestro Departamento Modelo en{' '}
              <span className='font-bold underline-text before:bg-white before:h-1'>
                <Link href='/'>Casagrande Laplace</Link>
              </span>
            </h2>
            <p className='text-white text-center'>Av. Laplace esq. Julio Verne. Villa Belgrano. Córdoba Capital.M. Berthelot 5225 (casi esquina Av. Laplace)</p>
            <p className='text-white'>Agenda tu visita en el horario que te quede mas comodo, al numero <span className='font-bold'><a href='https://wa.me/5493518192818' target='_blank'>351 819-2818</a></span></p>
            <Link href='#contacto'>
              <Button content='Contactanos' />
            </Link>
            <p className='text-white text-xl lg:text-2xl text-center'>Viví en modo <span className='font-bold'>Casagrande</span></p>
          </div>
        </div>
      </VisibleContainer>
    </Section>
  )
}

export default SectionCinco
