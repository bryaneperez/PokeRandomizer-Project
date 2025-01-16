import Pokedex from 'pokedex-promise-v2';
import {GetRandomPokemon} from "../scripts/Generate";


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

   interface Pokemon {
    id: number;
    name: string;
    sprite: string;
   }
   const P = new Pokedex();
   const poke = GetRandomPokemon();


  export function Display() {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png"}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            poke.name.toString();
          </Typography>
          <Typography>
            This is where the ability and nature will go.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>The moves will be down here</Button>
        </CardFooter>
      </Card>
    );
  }
  
  