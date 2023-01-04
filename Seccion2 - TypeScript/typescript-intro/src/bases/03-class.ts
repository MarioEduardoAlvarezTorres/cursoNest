import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon {
    // public id: number;
    // public name:string;

    // constructor(id:number,name:string){
    //     this.id = id;
    //     this.name = name;
    //     console.log('constructor llamado')
    // }
    // Es lo mismo de arriba pero en corto
    

    get imgUrl():string{

        return `https://pokemon.com/${this.id}.jpg`; //El this apunta a la instacia
    }
    constructor(
        public readonly id:number,
        public name:string,
        // public imageUrl:string,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()} !!!`)
    }

    speak(){
        console.log(`${this.name , this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves[0])

        return data.moves
    }
}

export const charmander = new Pokemon(1,'charmander')
// console.log(charmander)
// charmander.scream()
// charmander.speak()
console.log(charmander.getMoves())