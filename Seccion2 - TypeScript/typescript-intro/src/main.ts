import './style.css'
// import { name, age , isValid } from './bases/01-types'
// import { bulbasaur } from './bases/02-objects'
import { charmander } from './bases/03-class'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite ${charmander.name} !!!</h1>
`

