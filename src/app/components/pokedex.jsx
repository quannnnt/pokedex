'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card } from './card'

export function Pokedex() {

  const [arrayPokes, setArrayPokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && arrayPokes.length === 0) {
      getPokes();
    }
  }, [isLoading, arrayPokes]);

  function getPokes() {
    setIsLoading(true);
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(allPokemons => {
        const promises = allPokemons.results.map(pokemon => {
          let url = pokemon.url;
          return fetch(url)
            .then(newResponse => newResponse.json());
        });
        Promise.all(promises)
          .then(pokemonDataList => {
            const updatedArrayPokes = pokemonDataList.map(pokemonData => {
              let pokeName = pokemonData.name;
              let pokeId = pokemonData.id;
              let pokeWeight = pokemonData.weight;
              let pokeHeight = pokemonData.height;
              let pokeImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId < 10 ? `00${pokeId}` : pokeId < 100 ? `0${pokeId}` : pokeId}.png`;
              let typeObject = pokemonData.types.map((type) => type.type.name)
              return {
                name: pokeName,
                number: pokeId,
                weight: pokeWeight,
                height: pokeHeight,
                image: pokeImage,
                types: typeObject
              };
            });
            setArrayPokes(updatedArrayPokes);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching Pokemon data:', error);
            setIsLoading(false);
          });
      })
      .catch(error => {
        console.error('Error fetching Pokemon list:', error);
        setIsLoading(false);
      });
  }

  return (
    <div className='w-full h-full flex flex-col items-center pb-5'>
      <Image src='/img/poke-logo.png' width={166} height={93.75} alt="fds" priority={true} className='-ml-4' />
      <div className='flex items-center gap-1 mt-[-12px] -ml-4'>
        <Image src='/img/pokeball.png' width={25} height={25} alt="fds" />
        <h1 className='font-bold text-[14px]'>Pokedex</h1>
      </div>
      {
        isLoading && <p className='text-[12px] mt-8'>Loading...</p>
      }
      <div className='w-full h-auto flex flex-wrap justify-center pl-5 pr-8 gap-8 mt-8'>
        {
          !isLoading && arrayPokes.map((pokemon, index) => (
            <Card key={index} pokeName={pokemon.name} number={pokemon.number} weight={pokemon.weight} height={pokemon.height} image={pokemon.image} type={pokemon.types} />
          ))
        }
      </div>
    </div >
  )
}