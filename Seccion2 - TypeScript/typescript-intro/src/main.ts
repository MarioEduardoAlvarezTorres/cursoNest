import { charmander } from "./bases/04-injection"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello Vite ${charmander.name} !!!</h1>
`

