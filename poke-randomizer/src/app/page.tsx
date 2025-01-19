'use client'
import {Button} from "@material-tailwind/react";
import {SimpleFooter} from "./components/Footer";
import {Filter} from "./components/Filter";
import {Display} from "./components/Display"
import React, { useState } from 'react';




export default function Home() {
  const [cardKey, setCardKey] = useState<number>(0);

const handleClick = () => setCardKey(prevKey => prevKey + 1);

  return <div className="flex-col flex items-center">
      <Button className="justify-items-center" onClick={handleClick}>
        Generate Pokemon
        </Button>
      <div key = {cardKey}>
      <Display></Display>
      </div>
      <div className ="flex min-h-screen">
      <SimpleFooter></SimpleFooter>
      </div>
  </div>
}