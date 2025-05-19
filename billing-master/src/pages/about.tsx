import About from '@/components/about/About'
import Navbar from '@/components/hero/Navbar'
import React from 'react'

type Props = {}

const about = (props: Props) => {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  )
}

export default about