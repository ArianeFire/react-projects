// Events & Attributes
const appRoot = document.getElementById("app");
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
} 

const renderCounterApp = () => {
    const counterTemplate = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id="plus-btn-id" className="plus-btn-class">+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(counterTemplate, appRoot);
};

renderCounterApp();