export default function StatsFormatting() {
    const scores = ["str", "dex", "con", "int", "wis", "cha"];
    scores.forEach(ability => {
        let parent = document.getElementById(ability);
        if (!parent) return;
        let modifier = parent.getElementsByClassName("modifier")[0];
        let circle = parent.getElementsByClassName("circle")[0];
        if (!modifier || !circle) return;

        circle.style.setProperty("anchor-name", "--" + ability);
        modifier.style.positionAnchor = "--" + ability;
    });
}