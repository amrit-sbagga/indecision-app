console.log("app js is running");

var template = (
    <div>
        <h2>Indecision app</h2>
        <p>This is JSX from app.js!</p>
    </div>
);

var user = {
    name : "Amrit",
    age : 31,
    location : "New York"
}
// var name = "Amrit";
// var age = 31;
// var userLocation = "New York"

function getLocation(location){
    if (location)
        return <p>Location :- {location}</p>
}

let count = 0;
const someId = "myId";

const addOne = () => {
  count +=1;
  console.log("count = ", count);
  renderCounterApp();
}

const minusOne = () => {
    count -= 1;
    console.log("count = ", count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log("count = ", count);
    renderCounterApp();
}


//console.log(templateTwo);

var appRoot = document.getElementById("app");

const renderCounterApp = () => {
    var templateTwo = (
        <div>
           <h1>Count : { count }</h1>
           {/* <button id="my-id" className="button">+1</button> */}
           <button id={someId} className="button" onClick={addOne}>+1</button>
           <button id={someId} className="button" onClick={minusOne}>-1</button>
           <button id={someId} className="button" onClick={reset}>Reset</button>
        
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();