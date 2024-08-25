import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "Notes Home"
}

type Props = {}

function pages({}: Props) {
  
  return (
    <>
    <div>Here will be your notes.</div>
    </>
  )
}

export default pages