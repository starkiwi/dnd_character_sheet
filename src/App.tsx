import { useState} from 'react'
import CharacterViewer from './CharacterViewer.tsx'
import './App.css'


function App() {
  const [] = useState(0)

  return (
    <>
        <h1>Dnd Character Sheet</h1>
        <section>
            <CharacterViewer />
        </section>
    </>
  )
}

export default App
