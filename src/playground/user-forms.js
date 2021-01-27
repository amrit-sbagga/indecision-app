console.log("app js is running");

const app = {
    title: "Indecision App",
    options: ["One", "Two"]
}

const onFormSubmit = (event) => {
    event.preventDefault();

    //console.log("form submitted!!")
    const option = event.target.elements.option.value;

    if(option){
        app.options.push(option);
        event.target.elements.option.value = "";
        renderAndShowFormData();
    }
}

//create "Remove All" button list
const onRemoveAll = () => {
    app.options = [];
    renderAndShowFormData();
}

var appRoot = document.getElementById("app");

const renderAndShowFormData = () => {
    const template = (
        <div>
            <h2>Indecision app</h2>
            <p>This is JSX from app.js!</p>
            <p>{app.options.length > 0 ? "Here are your options" : "No Option"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {/* <li>Item one</li>
                <li>Item two</li> */}
                {app.options.forEach((itemElem) =>{
                    console.log(itemElem);
                    <li>{itemElem}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot)
}

renderAndShowFormData();