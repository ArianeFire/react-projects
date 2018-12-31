
const appRoot = document.getElementById("app");

// JXS Template Conditional Rendering (Actual there's 3 ways)
// 1. Using Ternary Operator => ?:
// 2. Using Logical && Operator
// 3. Using Function with logical condition

function toParagrahIfPresent(value){
    if(value){
        return <p>{value}</p>;
    }
}

const template3 = (
    <div>
        <h3>Name -> {user.name ? user.name : 'Anonymous'}</h3>
        {(user.age && user.age > 18) && <p>Age -> {user.age}</p>}
        {toParagrahIfPresent(user.location)}
        {toParagrahIfPresent(user.adress)}
    </div>
);

const site = {
    title: "Indecision App",
    subtitle: "Put your life in the hand of technologie",
    options: ["Option 1", "Option 2"]
}

function toJSXOptions(options){
    return (
        <ol>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
        </ol>
    );
}

const template4 = (
    <div>
        <h3>{site.title ? site.title : 'Anonymous Site'}</h3>
        <p>{site.subtitle}</p>
        {site.options.length && toJSXOptions(site.options)}     
    </div>
);

ReactDOM.render(template3, appRoot);