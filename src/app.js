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

var templateTwo = (
    <div>
        <h2>{user.name? user.name.toUpperCase():'Anonymous'}</h2>
        { (user.age && user.age >=18) && <p>Age : { user.age}</p>}
        { getLocation(user.location) }
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot)