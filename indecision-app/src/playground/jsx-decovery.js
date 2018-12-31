const appRoot = document.getElementById("app");

// JSX => JavaScript XML

const user = {
    name: "BERTHE Seydou",
    age: 24,
    location: "Oujda, Morocco"
};

const template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

ReactDom.render(template2, appRoot);