'use client'

import React, { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  ButtonGroup,
} from '@material-tailwind/react';

interface Pokemon {
  id: number;
  name: string;
  sprite: string;
}

const P = new Pokedex();

function generateRandomNumbers(count: number, max: number): number[] {
  const numbers: number[] = [];
  while (numbers.length < count) {
    const randomNumber = Math.floor(Math.random() * (max) + 1);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

export function Display() {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);
  const [randomAbility, setRandomAbility] = useState<string | null>(null);
  const [randomMoves, setRandomMoves] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const randomID = Math.floor(Math.random() * 1010) + 1;
      const randomAbilityID = Math.floor(Math.random() * 310) + 1;
      const pokemonData = await P.getPokemonByName(randomID.toString());
      const abilityData = (await P.getAbilityByName(randomAbilityID.toString())).name;
      const movesIDs = generateRandomNumbers(4, 919);
      const movesData = await Promise.all(
        movesIDs.map((id) => P.getMoveByName(id.toString()).then((move) => move.name))
      );

      const pokemon: Pokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        sprite: pokemonData.sprites.front_default ?? 'default_sprite_url',
      };

      setRandomPokemon(pokemon);
      setRandomAbility(abilityData);
      setRandomMoves(movesData);
    }

    fetchData();
  }, []);

  if (!randomPokemon || !randomAbility || randomMoves.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-15 w-15 flex items-center justify-center overflow-hidden">
        <img src={randomPokemon.sprite} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {randomPokemon.name}
        </Typography>
        <Typography>{randomAbility}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <ButtonGroup fullWidth>
          <Button>{randomMoves[0]}</Button>
          <Button>{randomMoves[1]}</Button>
        </ButtonGroup>
        <ButtonGroup fullWidth>
          <Button>{randomMoves[2]}</Button>
          <Button>{randomMoves[3]}</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default Display;
