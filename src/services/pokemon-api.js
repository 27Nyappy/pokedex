const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokemon() {
    return fetch(URL).then(response => response.json());
}