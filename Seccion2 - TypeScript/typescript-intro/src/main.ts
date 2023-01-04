import {charmander} from './bases/05-decorators'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite ${charmander.name} !!!</h1>
`

