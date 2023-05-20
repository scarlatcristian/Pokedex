"use strict";

const card = `<div class="pokemon" style="background-color: rgb(222, 253, 224)">
                <div class="img-container">
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        alt=""
                    />
                </div>

                <div class="info">
                    <span class="number">#001</span>
                    <h3 class="name">Bulbasaur</h3>
                    <small class="type">Type: <span>grass</span></small>
                </div>
            </div>`;

const poke_container = document.getElementById("poke-container");
const pokemon_count = 5;
const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const getPokemon = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

fetchPokemons();
