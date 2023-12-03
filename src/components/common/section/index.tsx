import React from 'react'

type SectionProps = {
  children: React.ReactNode
  id?:string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <section className='px-3.5 sm:px-8 py-8 md:p-6 lg:p-12 xl:p-8' id={id}>
      {children}
    </section>
  )
}

export default Section
