'use client'
import {Button} from "@material-tailwind/react";
import {SimpleFooter} from "./components/Footer";
import {Filter} from "./components/Filter";


export default function Home() {
  return <div className="flex-col flex items-center">
      <Filter></Filter>
      <Button className="justify-items-center">Generate New Team</Button>
      <SimpleFooter></SimpleFooter>
  </div>
}