'use client'
import React, { useState } from 'react'
import { StaticImageData } from 'next/image'

import TowerCard from '@/components/presentational/towerCard'

import torreSuquiaImg from '../../../../public/images/torre-suquia-casa-grande.jpg'
import torreLaplaceImg from '../../../../public/images/torre-laplace-casa-grande.jpg'

export interface ITowersInfo {
  title:string
  description:string
  img: StaticImageData
  alt:string
  info:string[]
}

const towers: ITowersInfo[] = [
  {
    title: 'Torre Suquia',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus labore distinctio nulla expedita dolorum ex cumque rerum, reiciendis delectus!',
    img: torreSuquiaImg,
    alt: 'Dycsa - Render de frente de Torre Suquia con parque y arboles',
    info: ['Imponente Hall central de ingreso', '8 pisos de departamentos', '1,2 y 3 dormitorios desde 115ms2 hasta 370m2', 'Cerraduras con control digital e ingresos con lectura de rostro', 'Carpinteria exterior de aluminio DVH', 'Unidades Domotizadas', 'Cerraduras con control digital']
  },
  {
    title: 'Torre Laplace',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus labore distinctio nulla expedita dolorum ex cumque rerum, reiciendis delectus!',
    img: torreLaplaceImg,
    alt: 'Dycsa - Render Torre Laplace sobre calle Laplace frente comercial y gente caminando',
    info: ['Frente imponente sobre Avenida Laplace', '2 pisos de departamentos', 'Locales comerciales', 'Parking en planta baja', 'Departamentos con cava privada en subsuelo', '32 cocheras de cortesía', 'tercer piso con unidades tipologias "Estudio"']
  }
]

const TowersContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(towers.length).fill(false))
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleOpen = (index:number) => {
    if (activeIndex === null) {
      setActiveIndex(index)
    } else {
      setActiveIndex(null)
    }
    const updateIsOpen = [...isOpen]

    updateIsOpen[index] = !updateIsOpen[index]
    setIsOpen(updateIsOpen)
  }

  return (
    <div className='w-full h-full flex flex-col space-y-10 md:space-y-0 md:justify-between lg:justify-center lg:space-x-10 md:flex-row pt-10'>
      {towers.map((tower, index) => (
        <TowerCard
          key={index}
          activeIndex={activeIndex}
          handleOpen={() => handleOpen(index)}
          index={index}
          isOpen={isOpen}
          {...tower}
        />
      ))}
    </div>
  )
}

export default TowersContainer
