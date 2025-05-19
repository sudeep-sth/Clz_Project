import Navbar from '@/components/hero/Navbar'
import MenuPage from '@/components/menu/Menu'
import React from 'react'

type Props = {}

const menu = (props: Props) => {
  return (
    <div>
      <Navbar />
      <MenuPage />
    </div>
  )
}

export default menu