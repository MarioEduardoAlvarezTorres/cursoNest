export const pokemonIds = [1,2,3,4,5,6,7,8,9]
// export const pokemon = {
//     id:1,
//     name:'Bulbasor'
// }

interface Pokemon {
    id:number;
    name: string;
    age:number | undefined; // o poner age?:number
}

export const bulbasaur:Pokemon = {
    id:1,
    name:'Bulbasor',
    age: undefined
}
export const charmander:Pokemon = {
    id:1,
    name:'charmander',
    age: undefined
}

export const pokemons:Pokemon[] = []
pokemons.push( charmander, bulbasaur )
console.log(pokemons)