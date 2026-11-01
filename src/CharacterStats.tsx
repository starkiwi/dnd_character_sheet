import './CharacterStats.css'

export default function CharacterStats() {
    return (
        <>
            <ul>
                <li id={'str'}>
                    <div className={'score'}>
                        <h4>Strength</h4>
                        <h2>+0</h2>
                    </div>
                    <div id={'str-modifier'}>
                        <h2>10</h2>
                    </div>
                    <div className={'circle'}></div>
                </li>
                <li id={'dex'}>
                    <div className={'score'}>
                        <h4>Dexterity</h4>
                        <h2>+0</h2>
                    </div>
                    <div className={'modifier'}>
                        <h2>10</h2>
                    </div>
                    <div className={'circle'}></div>
                </li>
                <li id={'con'}>
                    <div className={'score'}>
                        <h4>Constitution</h4>
                        <h2>+0</h2>
                    </div>
                    <div className={'modifier'}>
                        <h2>10</h2>
                    </div>
                    <div className={'circle'}></div>
                </li>
                <li id={'int'}>
                    <div className={'score'}>
                        <h4>Intelligence</h4>
                        <h2>+0</h2>
                    </div>
                    <div className={'modifier'}>
                        <h2>10</h2>
                    </div>
                    <div className={'circle'}></div>
                </li>
                <li id={'wis'}>
                    <div className={'score'}>
                        <h4>Wisdom</h4>
                        <h2>+0</h2>
                    </div>
                    <div className={'modifier'}>
                        <h2>10</h2>
                    </div>
                    <div className={'circle'}></div>
                </li>
                <li id={'cha'}>
                    <div className={'score'}>
                        <h4>Charisma</h4>
                        <h2>+0</h2>
                    </div>
                    <div className={'modifier'}>
                        <h2>10</h2>
                    </div>
                    <div className={'circle'}></div>
                </li>
            </ul>
        </>
    )
}