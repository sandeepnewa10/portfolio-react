import React from 'react'
import { Hero } from '../hero/Hero';
import { Footer } from './Footer';

export const DefaultLayout = ({children}) => {
  return (
    <>
     <Hero />
      <main>{children}</main>
      <Footer />
    </>
  )
}
