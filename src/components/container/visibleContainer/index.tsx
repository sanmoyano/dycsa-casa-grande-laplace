'use client'
import React, { useRef } from 'react'

import useVisible from '@/hooks/useVisible'

type Props = {
  children: React.ReactNode
}

const VisibleContainer: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisible(ref)

  return (
    <div ref={ref} className={`flex flex-col items-center space-y-2 justify-between min-[1700px]:justify-evenly transition-opacity ease-in duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} mt-5`}>
      {children}
    </div>
  )
}

export default VisibleContainer
