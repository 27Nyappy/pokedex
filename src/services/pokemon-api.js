const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function pokemon(options) {

    const page = options.page || 1;
    const search = options.search;
    const filterType = options.filterType;
    const filterAttack = options.filterAttack;
    const filterDefense = options.filterDefense;

    const url = `${URL}?page=${page || 1}&pokemon=${search || ''}${filterType || ''}${filterAttack || ''}${filterDefense || ''}`;
    const response = await fetch(url);
    return await response.json();
}