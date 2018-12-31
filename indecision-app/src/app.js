console.log("App.js is running!")

const appRoot = document.getElementById("app");

// Form & Input
let app = {
    title: "Indecision App",
    subtitle: "Put your life in the hand of a technology",
    options: []
};

const onFormSubmit = (e) => {
    // To prevent form default form submission behavior
    e.preventDefault();
    let option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderIndecisionApp();
    }
};

const onRemoveAllClick = () => {
    app.options = [];
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randonNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randonNumber];
    alert(option);
}

const renderIndecisionApp = () => {
    var appTemplate = (
        <div>
            <p>{app.title}</p>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here'are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAllClick}>Remove All</button>
            <ol>
                {app.options.map(opt => <li key={opt}>{opt}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(appTemplate, appRoot);
};

renderIndecisionApp();

