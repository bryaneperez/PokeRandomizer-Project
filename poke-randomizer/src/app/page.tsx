'use client'
import {SimpleFooter} from "./components/Footer";
import {Display} from "./components/Display";
import React from 'react';




export default function Home() {
  return <div className="flex-col flex items-center">
      <div>
      <Display></Display>
      </div>
      <div className ="flex min-h-screen">
      <SimpleFooter></SimpleFooter>
      </div> 
  </div>
}