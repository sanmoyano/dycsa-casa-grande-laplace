'use client'
import React from 'react'
import { ToastContainer } from 'react-toastify'

import HubSpotContactForm from '@/components/container/hubSportForm'
import LogoCasaGrande from '@/components/common/logoCasaGrande'
import 'react-toastify/dist/ReactToastify.css'

const Footer: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center w-full bg-gradient-to-t from-[rgba(3,19,51,.7)] to-transparent' id='contacto'>
      <ToastContainer />
      <HubSpotContactForm />
      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
        <LogoCasaGrande heigth={200} logo='/logo/slogan-casa-grande.svg' width={300} />
        <LogoCasaGrande heigth={200} logo='/logo/logo-casa-grande-b.svg' width={300} />
      </div>
    </div>
  )
}

export default Footer
