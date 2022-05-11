import './style.css'
import HeaderTop from './components/header-top'

const app = document.querySelector<HTMLDivElement>('#app')!

app.insertAdjacentHTML('beforeend', 
`
${HeaderTop()}
  <h1>Fire Hydrant!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`) 
