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
    const randomMoves = generateRandomNumbers(4,919);

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
            <Button>${P.getMoveByName(randomMoves[0]).toString()}</Button>
            <Button>${P.getMoveByName(randomMoves[1]).toString()}</Button>
          </ButtonGroup>
          <ButtonGroup fullWidth>
            <Button>${P.getMoveByName(randomMoves[2]).toString()}</Button>
            <Button>${P.getMoveByName(randomMoves[3]).toString()}</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  }


  function generateRandomNumbers(count: number, max: number): number[] {
    const numbers: number[] = [];

    while(numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * (max) + 1);
      if (!numbers.includes(randomNumber)){
        numbers.push(randomNumber);
      }
    }

    return numbers;

  }