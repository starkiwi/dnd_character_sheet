import {useState} from 'react'
import CharacterViewer from './CharacterViewer.tsx'
import CharacterStats from './CharacterStats.tsx'
import './App.css'


function App() {
    const [] = useState(0)

    return (
        <>
            <h1>Dnd Character Sheet</h1>
            <section id={'characterModel'}>
                <CharacterViewer/>
            </section>
            <section id={'characterSheet'}>
                <div id={'stats'}>
                    <CharacterStats/>
                </div>
            </section>
        </>
    )
}

export default App
