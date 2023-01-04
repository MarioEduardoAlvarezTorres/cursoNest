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
}

export const charmander = new Pokemon(1,'charmander')
console.log(charmander)
charmander.scream()
charmander.speak()