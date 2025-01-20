'use client'

import {SimpleFooter} from "./components/Footer";
import {Display} from "./components/Display";
import React from 'react';




export default function Home() {
  return <div className="flex-col flex items-center mt-20 min-h-screen h-full">
      <div className= "flex flex-wrap justify-center space-x-4 space-y-4">
      <Display></Display>
      <Display></Display>
      <Display></Display>
      <Display></Display>
      <Display></Display>
      <Display></Display>
      </div>
      <div className ="flex min-h-screen">
      <SimpleFooter></SimpleFooter>
      </div> 
  </div>
}