import Pokedex from 'pokedex-promise-v2';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    ButtonGroup,
  } from "@material-tailwind/react";

   interface Pokemon {
    id: number;
    name: string;
    sprite: string;
   }

   const P = new Pokedex();


  export  async function Display() {
    const randomID = Math.floor(Math.random() * 1010) + 1;
    const randomAbilityID = Math.floor(Math.random() * 310) + 1;
    const randomPokemon = P.getPokemonByName(randomID.toString());
    const randomAbility = P.getAbilityByName(randomID.toString());

    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={(await randomPokemon).sprites.front_default?.toString()}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            ${(await randomPokemon).species.toString()};
          </Typography>
          <Typography>
            randomAbility.toString();
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <ButtonGroup fullWidth>
            <Button>Move 1</Button>
            <Button>Move 2</Button>
          </ButtonGroup>
          <ButtonGroup fullWidth>
            <Button>Move 3</Button>
            <Button>Move 4</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }