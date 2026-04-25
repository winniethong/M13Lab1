let zak = "Zak Ruvalcaba";
let sally = "Sally Smith";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";

const element = (
    <ul style={{ color: "blue", fontSize: "24px" }}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
    </ul>
);

ReactDOM.render(element, document.getElementById("content"));