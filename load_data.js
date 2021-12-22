// Load Data into Redis...
import { Client, Repository } from 'redis-om';
import { readFile } from 'fs/promises';

async function loadAnimals() {
  console.log('TODO... load data!');

  const animalData = JSON.parse(await readFile(new URL('./animal_data.json', import.meta.url)));

  for (const animal of animalData.animals) {
    const id = 'TODO';
    console.log(`Loaded ${animal.name} the ${animal.species} as ${id}.`);
  }
}

loadAnimals();