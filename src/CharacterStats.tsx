import './CharacterStats.css'
import { useEffect } from 'react'

function StatsFormatting() {
    const scores = ["str", "dex", "con", "int", "wis", "cha"];
    scores.forEach(ability => {
        let parent = document.getElementById(ability);
        if (!parent) return;
        let modifier = parent.getElementsByClassName("modifier")[0] as HTMLElement;
        let circle = parent.getElementsByClassName("circle")[0] as HTMLElement;
        if (!modifier || !circle) return;

        circle.style.setProperty("anchor-name", "--" + ability);
        modifier.style.positionAnchor = "--" + ability;
    });
}

export default function CharacterStats() {
    useEffect(() => {
        StatsFormatting();
    }, []);
    return (
        <>
            <ul>
                <li id={'str'}>
                    <div className={'score'}>
                        <h4>Strength</h4>
                        <h2>+0</h2>
                    </div>
                    <div className={'modifier'}>
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