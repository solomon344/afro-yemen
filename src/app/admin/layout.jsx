import React from 'react'
import Sidebar from '@/components/sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex h-[100dvh] bg-gray-50'>
        <Sidebar/>
        <div className='p-4 grow '>
        {children}
        </div>
    </div>
  )
}

export default Layout