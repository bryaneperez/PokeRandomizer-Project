'use client'
import {Button} from "@material-tailwind/react";
import {SimpleFooter} from "./components/Footer";
import {Filter} from "./components/Filter";


export default function Home() {
  return <div className="flex-col flex items-center">
      <Button className="justify-items-center">Generate Pokemon</Button>
      <SimpleFooter></SimpleFooter>
  </div>
}