'use client'
import {Button} from "@material-tailwind/react";
import {SimpleFooter} from "./components/Footer";
import {Filter} from "./components/Filter";
import {Display} from "./components/Display"

const handleClick = () => {
  console.log("Test");
};

export default function Home() {
  return <div className="flex-col flex items-center">
      <Button className="justify-items-center" onClick={handleClick}>Generate Pokemon</Button>
      <Display></Display>
      <div className ="flex min-h-screen">
      <SimpleFooter></SimpleFooter>
      </div>
  </div>
}
