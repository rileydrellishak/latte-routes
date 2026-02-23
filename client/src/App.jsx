import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Latte Routes</h1>
      </header>
      <main>
        <section>
          <h2>Create entry form</h2>
          <p>oooo create an entry</p>
        </section>
        <section>
          <h2>Look at entries</h2>
          <p>oooo an entry</p>
        </section>
      </main>
      <footer>
        <p>
          Riley 😎
        </p>
      </footer>

    </>
  )
}

export default App
