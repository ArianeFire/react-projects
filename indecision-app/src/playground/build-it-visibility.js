
const appRoot = document.getElementById("app");

let visibile = false;

const onToggle = () => {
    visibile = !visibile;
    render();
}

const render = () => {
    var template = (
        <div>
            <h1>Visibility</h1>
            <button onClick={onToggle}>{visibile ? "Hide details" : "Show details"}</button>
            {visibile && <p>Here is the details you want to see</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};
render(); 